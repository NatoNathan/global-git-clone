import {Flags} from '@oclif/core';
import Base, {LogLevel} from '../../base';
import inquirer from 'inquirer';

export default class TemplateRemove extends Base {
  static description = 'Remove a template';

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    ...Base.flags,
    name: Flags.string({char: 'n', description: 'template name'}),
  }

  static args = [
    {name: 'name', description: 'template name', required: false},
  ]

  static aliases = ['template:rm'];

  public async run(): Promise<void> {
    const {flags, args} = await this.parse(TemplateRemove);
    const config = await this.getConfig();
    const templates = config.templates;

    let name = flags.name || args.name;

    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'name',
        message: 'Select a template to remove',
        choices: Object.keys(templates),
      },
    ], {name});

    this.log(`Removing template ${answers.name}`, LogLevel.DEBUG);

    name = answers.name as string;

    if (name in templates) {
      this.log(`Removing template ${name}: ${templates[name]}`, LogLevel.INFO);
      delete templates[name];
    } else {
      this.log(`Template ${name} does not exist`, LogLevel.WARN);
    }

    this.saveConfig(config);
  }
}
