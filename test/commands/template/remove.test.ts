import {expect, test} from '@oclif/test';

describe('template:remove', () => {
  test
  .stdout()
  .command(['template:remove', '--name="test"', '-v', '--dry-run', '--config="test/fixtures/config.json"'])
  .it('runs template:remove', ctx => {
    expect(ctx.stdout).to.contain('Removing template "test"');
  });
});
