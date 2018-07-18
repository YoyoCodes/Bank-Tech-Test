'use strict'
describe('Feature', () => {
  let bankAccount;
  let header;
  let transaction;

  header = '  date || credit || debit || balance  ';
  transaction = '18/07/2018  ||  500.00  ||  ||  500.00';

  beforeEach(() => {
    bankAccount = new BankAccount;
  });

  it('a user can make a deposit', () => {
    bankAccount.deposit(500.00);
    expect(bankAccount.balance()).toEqual(500.00);
  });

  it('a user can make a withdrawal', () => {
    bankAccount.deposit(500.00);
    bankAccount.withdrawal(300.00);
    expect(bankAccount.balance()).toEqual(200.00);
  });

  it('a user can see a printed statement of his transactions', () => {
    bankAccount.deposit(500.00);
    spyOn(console, 'log');
    bankAccount.viewStatement();
    expect(console.log).toHaveBeenCalledWith(header);
    expect(console.log).toHaveBeenCalledWith(transaction);
  })

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
