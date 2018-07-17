'use strict'
describe('AccountStatement', () => {
  let statement;
  let transactions;
  let expectedResult;
  let header;

  beforeEach(() => {
    transactions = [["17/07/2018", 300, 300], ["18/07/2018", -100, 200]];
    statement = new AccountStatement(transactions);
    header = "  date || credit || debit || balance  ";
    expectedResult = [
                      "  date || credit || debit || balance  ",
                      "18/07/2018  ||  ||  100  ||  200",
                      "17/07/2018  ||  300  ||  ||  300"
                    ];
  });

  it('is defined', () => {
    expect(statement).toEqual(jasmine.any(AccountStatement));
  });

  it('has a header by default', () => {
    let otherStatement = new AccountStatement([]);
    expect(otherStatement.generateStatement()).toEqual([header]);
  });

  it('generates a statement in reverse chronological order', () => {
    expect(statement.generateStatement()).toEqual(expectedResult);
  });
});
