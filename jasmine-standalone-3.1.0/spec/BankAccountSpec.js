'use strict'
describe('Bank Account', () => {
  it('is defined', () => {
    let bankAccount = new BankAccount;
    expect(bankAccount).toBeDefined();
  });

  it('can handle a deposit', () => {
    let bankAccount = new BankAccount;
    bankAccount.deposit(500);
    expect(bankAccount.balance()).toEqual(500);
  });
});
