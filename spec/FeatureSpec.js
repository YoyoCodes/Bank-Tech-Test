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


});
