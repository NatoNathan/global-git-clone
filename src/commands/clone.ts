import {Flags, CliUx} from '@oclif/core';
import {exec} from 'node:child_process';
import {promisify} from 'node:util';
const execAsync = promisify(exec);

import Base, {LogLevel} from '../base';
type Template = {
  name: string;
  value: string;
};
export default class Clone extends Base {
  static description = 'Clone a repository from a remote url, to your local projects directory.'

  static examples = [
    '<%= config.bin %> <%= command.id %> git@gtihub.com:natonathan/global-git-clone.git',
    '<%= config.bin %> <%= command.id %> https://github.com/natonathan/global-git-clone.git --template sdk',
    '<%= config.bin %> <%= command.id %> git@gtihub.com:natonathan/global-git-clone.git --template "~/git/{provider}/{owner}/{repo}"',
  ]

  static usage= [
    '<%= command.id %> <repo>',
    '<%= command.id %> <repo> --template <template>',
  ];

  static flags = {
    ...Base.flags,
    template: Flags.string({char: 't', description: 'template name or string', default: 'default'}),
  }

  static args = [{name: 'repo'}]

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Clone);
    const {repo} = args;
    const {template} = flags;

    const localPath = this.applyTemplate(await this.getTemplate(template), this.getValues(repo));
    this.clone(repo, localPath);
  }

  private async clone(repo: string, path: string): Promise<void> {
    CliUx.ux.action.start(`Cloning ${repo} to ${path}`);
    if (this.flags.dryRun) {
      this.log('Dry run, skipping...', LogLevel.INFO);
      this.log(`git clone ${repo} ${path}`, LogLevel.DEBUG);
    } else {
      await execAsync(`git clone ${repo} ${path}`);
    }

    CliUx.ux.action.stop();
  }

  private async getTemplate(template: string): Promise<Template> {
    const templates = (await this.getConfig()).templates;
    if (template in templates) {
      return {
        name: template,
        value: templates[template],
      };
    }

    return {
      name: 'custom',
      value: template,
    };
  }

  private applyTemplate(template: Template, _values: Record<string, string>): string {
    this.log(`Applying template ${template.name}`, LogLevel.DEBUG);

    return template.value.replace(/{([^}]+)}/g, (_, key) => {
      return _values[key];
    },
    );
  }

  private getValues(repo: string, type?:'ssh'|'http'): Record<string, string> {
    const provider = this.getProvider(repo);
    const repoType = type || this.getType(repo);
    const owner = this.getOwner(repo, repoType);
    const repoName = this.getRepoName(repo);

    return {
      provider,
      type: repoType,
      owner,
      repo: repoName,
    };
  }

  private getProvider = (remote: string): string => {
    const provider = (remote.match(/(?:[\da-z](?:[\da-z-]{0,61}[\da-z])?\.)+[\da-z][\da-z-]{0,61}[\da-z]/) as string[])[0];
    // remove top level domain
    return provider.split('.').slice(0, -1).join('.');
  };

  private getType = (remote: string):'ssh' | 'http' => /^https?:\/\//.test(remote) ? 'http' : 'ssh';

  private getOwner = (remote: string, type: 'ssh'| 'http'): string => {
    switch (type) {
    case 'ssh':
      return (remote.split(':')[1].split('/') as string[])[0];
    case 'http':
      return (remote.split('/') as string[])[3];
    default:
      throw new Error('Invalid remote type');
    }
  };

  getRepoName = (remote: string): string => (remote.split('/') as any).pop().replace('.git', '');
}

