'use strict'
describe('Feature', () => {
  let bankAccount;
  let header;
  let transaction;

  beforeEach(() => {
    bankAccount = new BankAccount;
    header = '  date || credit || debit || balance  ';
    transaction = '17/7/2018  ||  500  ||  ||  500';
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

  it('a user can see a printed statement', () => {
    bankAccount.deposit(500.00);
    spyOn(console, 'log');
    bankAccount.viewStatement();
    expect(console.log).toHaveBeenCalledWith(header);
    expect(console.log).toHaveBeenCalledWith(transaction);
  })
});
