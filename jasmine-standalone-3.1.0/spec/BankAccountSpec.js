'use strict'
describe('Bank Account', () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount;
  });

  it('has a default balance of 0', () => {
    expect(bankAccount.balance()).toEqual(0);
  });

  it('can handle a deposit of 300', () => {
    bankAccount.deposit(300);
    expect(bankAccount.balance()).toEqual(300);
  });

  it('can handle a withdrawal of 100', () => {
    bankAccount.deposit(300);
    bankAccount.withdrawal(100);
    expect(bankAccount.balance()).toEqual(200);
  });

  describe('when the withdrawal is greater than the balance', () => {
    it('does not allow the transaction', () => {
      bankAccount.deposit(100);
      expect( function() {bankAccount.withdrawal(200);}).toThrowError('Insufficient funds, please try again');
    });
  });
});
