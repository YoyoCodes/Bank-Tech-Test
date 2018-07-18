'use strict'
describe('AccountStatement', () => {
  let statement;
  let transaction;
  let header;

  header = "  date || credit || debit || balance  ";

  beforeEach(() => {
    statement = new AccountStatement();
  });

  it('has a header by default', () => {
    expect(statement.generateStatement([])).toEqual([header]);
  });

  it('prints an empty statement', () => {
    spyOn(console, 'log');
    statement.handleStatement([]);
    expect(console.log).toHaveBeenCalledWith(header);
  });
});
