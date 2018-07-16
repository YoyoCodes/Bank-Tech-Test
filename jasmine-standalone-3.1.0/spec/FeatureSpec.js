'use strict'
describe('Feature', () => {
  it('a user can make a deposit', () => {
    let bankAccount = new BankAccount;
    bankAccount.deposit(500);
    expect(bankAccount.balance()).toEqual(500);
  });
});
