// src/base.ts
import {Command, Flags} from '@oclif/core';
import * as fs from 'fs-extra';
import * as path from 'node:path';

export enum LogLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR
}

export default abstract class extends Command {
  static flags = {
    loglevel: Flags.enum({char: 'l', options: ['debug', 'info', 'warn', 'error'], description: 'log level', default: 'info'}),
    verbose: Flags.boolean({char: 'v', description: 'verbose output', default: false}),
    config: Flags.string({char: 'c', description: 'custom config file'}),
    'dry-run': Flags.boolean({char: 'd', description: 'dry run', default: false}),
  }

  flags:Record<string, any> = {};

  async getConfig(): Promise<Record<string, any>> {
    const configPath = this.flags.config || path.join(this.config.configDir, 'config.json');
    const userConfig = await fs.readJSON(configPath).catch(() => {
      return {};
    });
    userConfig.templates.default = userConfig.templates?.default || '~/git/{provider}/{owner}/{repo}';
    userConfig.configPath = configPath;
    return userConfig;
  }

  async saveConfig(config: Record<string, any>): Promise<void> {
    const dryRun = this.flags['dry-run'];
    const configPath = config.configPath;
    delete config.configPath;
    if (dryRun) {
      this.log('Dry run, not saving config', LogLevel.DEBUG);
      this.log(JSON.stringify(config, null, 2), LogLevel.DEBUG);
      return;
    }

    await fs.writeJSON(configPath, config, {spaces: 2});
  }

  log(msg:string, level:LogLevel):void {
    if (this.flags.verbose || level >= this.logger.getLogLevel(this.flags.loglevel)) {
      this.logger.log(msg, level);
    }
  }

  private logger = {
    log(msg:string, level?:LogLevel):void {
      switch (level) {
      case LogLevel.ERROR:
        console.error(msg);
        break;
      case LogLevel.WARN:
        console.warn(msg);
        break;
      case LogLevel.DEBUG:
        console.debug(msg);
        break;
      case LogLevel.INFO:
      default:
        console.log(msg);
      }
    },
    getLogLevel(level:string):number {
      switch (level) {
      case 'debug':
        return LogLevel.DEBUG;
      case 'warn':
        return LogLevel.WARN;
      case 'error':
        return LogLevel.ERROR;
      case 'info':
      default:
        return LogLevel.INFO;
      }
    },
  }

  async init(): Promise<void> {
    // do some initialization
    const {flags} = await this.parse(this.constructor as typeof Command);
    this.flags = flags;
  }

  async catch(err: Error): Promise<void> {
    return super.catch(err);
  }
}
