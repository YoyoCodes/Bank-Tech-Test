'use strict'
describe('AccountStatement', () => {
  let statement;
  let transactions;
  let expectedResult;
  let header;

  transactions = [["17/07/2018", 300, 300], ["18/07/2018", -100, 200]];
  header = "  date || credit || debit || balance  ";

  beforeEach(() => {
    statement = new AccountStatement(transactions);
  });

  it('is defined', () => {
    expect(statement).toEqual(jasmine.any(AccountStatement));
  });

  it('has a header by default', () => {
    let otherStatement = new AccountStatement([]);
    expect(otherStatement.generateStatement()).toEqual([header]);
  });

  it('prints a statement', () => {
    let otherStatement = new AccountStatement([]);
    spyOn(console, 'log');
    otherStatement.generateStatement();
    otherStatement.printStatement();
    expect(console.log).toHaveBeenCalledWith(header);
  });
});
