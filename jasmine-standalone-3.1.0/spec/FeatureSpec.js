'use strict'
describe('Feature', () => {
  it('a user can make a deposit', () => {
    let bankAccount = new BankAccount;
    bankAccount.deposit(500);
    expect(bankAccount.balance()).toEqual(500);
  });

  it('a user can make a withdrawal', () => {
    let bankAccount = new BankAccount;
    bankAccount.deposit(500);
    bankAccount.withdrawal(300);
    expect(bankAccount.balance()).toEqual(200);
  });
});
