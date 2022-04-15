import {expect, test} from '@oclif/test';

describe('template:list', () => {
  test
  .stdout()
  .command(['template:list', '--config="test/fixtures/config.json"', '--csv'])
  .it('runs template:list', ctx => {
    expect(ctx.stdout).to.contain('Name,Template');
  });
});
