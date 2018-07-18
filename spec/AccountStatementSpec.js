'use strict'
describe('AccountStatement', () => {
  let statement;
  let transactions;
  let expectedResult;
  let header;

  header = "  date || credit || debit || balance  ";

  beforeEach(() => {
    statement = new AccountStatement(transactions);
  });

  it('has a header by default', () => {
    let otherStatement = new AccountStatement([]);
    expect(otherStatement.generateStatement()).toEqual([header]);
  });

  it('prints an empty statement', () => {
    let otherStatement = new AccountStatement([]);
    spyOn(console, 'log');
    otherStatement.generateStatement();
    otherStatement.printStatement();
    expect(console.log).toHaveBeenCalledWith(header);
  });
});
