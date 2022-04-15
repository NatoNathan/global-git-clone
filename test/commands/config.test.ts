import {expect, test} from '@oclif/test';

describe('config', () => {
  test
  .stdout()
  .command(['config', '--config="test/fixtures/config.json"'])
  .it('runs config', ctx => {
    expect(ctx.stdout).to.contain('Getting config file from:');
  });
});
