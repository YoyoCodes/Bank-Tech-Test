'use strict'
describe('Bank Account', () => {
  it('is defined', () => {
    let bankAccount = new BankAccount;
    expect(bankAccount).toBeDefined();
  });

  it('has a default balance of 0', () => {
    let bankAccount = new BankAccount;
    expect(bankAccount.balance()).toEqual(0);
  });

  it('can handle a deposit', () => {
    let bankAccount = new BankAccount;
    bankAccount.deposit(300);
    expect(bankAccount.balance()).toEqual(300);
  });
});
