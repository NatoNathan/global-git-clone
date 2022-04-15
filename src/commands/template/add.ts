import {Flags} from '@oclif/core';
import inquirer from 'inquirer';
import Base, {LogLevel} from '../../base';

export default class TemplateAdd extends Base {
  static description = 'Add a new template';

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    ...Base.flags,
    force: Flags.boolean({char: 'f'}),
    name: Flags.string({char: 'n', description: 'template name'}),
    template: Flags.string({char: 't', description: 'template string'}),
  }

  static args = [
    {name: 'name', description: 'template name', required: false},
  ]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(TemplateAdd);
    const config = await this.getConfig();
    const templates = config.templates;

    let name = flags.name || args.name;
    let template = flags.template;

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter a name for the template',
      },
      {
        type: 'input',
        name: 'template',
        message: 'Enter a template string, e.g. ~/git/{provider}/{owner}/{repo}',
        default: '~/git/{provider}/{owner}/{repo}',
      },
    ], {name, template});

    name = answers.name as string;
    template = answers.template as string;

    if (name in templates) {
      if (flags.force) {
        this.log(`Template ${name} already exists, overwriting`, LogLevel.INFO);
      } else {
        this.log(`Template ${name} already exists`, LogLevel.WARN);
        return;
      }
    }

    this.log(`Adding template ${name}: ${template}`, LogLevel.INFO);

    templates[name] = template;

    this.saveConfig(config);
  }
}
