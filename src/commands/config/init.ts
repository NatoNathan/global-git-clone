import inquirer from 'inquirer';
import Base from '../../base';

export default class ConfigInit extends Base {
  static description = 'Initialize a config file';
  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    ...Base.flags,
  }

  public async run(): Promise<void> {
    const config = await this.getConfig();
    const configPath = this.flags.config;
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'configPath',
        message: 'Enter a path to your config file',
        default: config.configPath,
      },
    ], {configPath: configPath});

    config.configPath = answers.configPath as string;

    await this.saveConfig(config);
  }
}
