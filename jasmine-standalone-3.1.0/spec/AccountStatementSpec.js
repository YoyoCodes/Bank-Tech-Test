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

  it('is defined', () => {
    expect(statement).toEqual(jasmine.any(AccountStatement));
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

  it('a user can\'t make an invalid deposit', () => {
    let bankAccount = new BankAccount;
    expect( function() {bankAccount.deposit('string');}).toThrowError('Incorrect input, please try again');
    expect( function() {bankAccount.deposit(-100.00);}).toThrowError('Incorrect input, please try again');
  })

  it('a user can\'t make an invalid withdrawal', () => {
    let bankAccount = new BankAccount;
    expect( function() {bankAccount.withdrawal(200);}).toThrowError('Insufficient funds, please try again');
    expect( function() {bankAccount.withdrawal('string');}).toThrowError('Incorrect input, please try again');
  })
});
