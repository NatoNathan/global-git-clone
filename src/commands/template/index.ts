import {CliUx} from '@oclif/core';
import Base from '../../base';

export default class TemplateList extends Base {
  static description = 'List all available templates';

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    ...Base.flags,
    ...CliUx.ux.table.flags(),
  }

  static aliases = ['template:ls', 'template:list'];

  public async run(): Promise<void> {
    const {flags} = await this.parse(TemplateList);
    const config = await this.getConfig();
    const templates = Object.keys(config.templates).map(key => {
      return {
        name: key,
        template: config.templates[key],
      };
    });

    CliUx.ux.table(templates, {
      name: {},
      template: {},
    }, {
      ...flags, // parsed flags
    },
    );
  }
}
