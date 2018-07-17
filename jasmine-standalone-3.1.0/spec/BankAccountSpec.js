'use strict'
describe('Bank Account', () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount;
  });

  it('has a default balance of 0.00', () => {
    expect(bankAccount.balance()).toEqual(0.00);
  });

  it('can handle a deposit of 300.00', () => {
    bankAccount.deposit(300.00);
    expect(bankAccount.balance()).toEqual(300.00);
  });

  it('can handle a withdrawal of 100.00', () => {
    bankAccount.deposit(300.00);
    bankAccount.withdrawal(100.00);
    expect(bankAccount.balance()).toEqual(200.00);
  });

  describe('when the withdrawal is greater than the balance', () => {
    it('does not allow the transaction', () => {
      bankAccount.deposit(100);
      expect( function() {bankAccount.withdrawal(200);}).toThrowError('Insufficient funds, please try again');
    });
  });
});
