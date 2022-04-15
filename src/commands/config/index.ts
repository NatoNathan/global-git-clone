import Base, {LogLevel} from '../../base';

export default class Config extends Base {
  static description = 'Prints the current config file';

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    ...Base.flags,
  }

  public async run(): Promise<void> {
    const config = await this.getConfig();
    this.log(`Getting config file from: ${config.configPath}`, LogLevel.INFO);
    console.dir(config);
  }
}
