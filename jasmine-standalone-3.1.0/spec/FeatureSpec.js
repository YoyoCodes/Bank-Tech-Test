'use strict'
describe('Feature', () => {
  let bankAccount;

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
});
