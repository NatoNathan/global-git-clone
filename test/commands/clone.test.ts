import {expect, test} from '@oclif/test';

describe('clone', () => {
  test
  .stdout()
  .command(['clone', '"git@github.com:natonathan/global-git-clone.git"', '-v', '--dry-run', '--config="test/fixtures/config.json"'])
  .it('runs clone', ctx => {
    expect(ctx.stdout).to.contain('Applying template default');
  });
});
