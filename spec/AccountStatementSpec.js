'use strict'
describe('AccountStatement', () => {
  let statement;
  let transaction;
  let header;
  let expected;

  header = "  date || credit || debit || balance  ";
  transaction = [{"date" : "18/07/2018", "amount" : 100.00, "balance" : 100.00}];
  expected = "18/07/2018  ||  100.00  ||  ||  100.00";

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

  it('prints a statement for a transaction',() => {
    spyOn(console, 'log');
    statement.handleStatement(transaction);
    expect(console.log).toHaveBeenCalledWith(header);
    expect(console.log).toHaveBeenCalledWith(expected);
  });
});
