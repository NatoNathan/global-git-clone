import {expect, test} from '@oclif/test';

describe('template:add', () => {
  test
  .stdout()
  .command(['template:add', '--name="fun"', '--template="~/test"', '--dry-run', '--config="test/fixtures/config.json"'])
  .it('runs template:add', ctx => {
    expect(ctx.stdout).to.contain('Adding template "fun": "~/test"\n');
  });
});
