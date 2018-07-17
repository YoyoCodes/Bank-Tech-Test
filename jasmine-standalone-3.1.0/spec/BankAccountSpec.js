'use strict'
describe('Bank Account', () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount;
  });

  it('has a default balance of 0.00', () => {
    expect(bankAccount.balance()).toEqual(0.00);
  });

  it('has a default empty transaction list', () => {
    expect(bankAccount.viewTransactions()).toEqual([]);
  });

  it('can handle a deposit of 300.00', () => {
    bankAccount.deposit(300.00);
    expect(bankAccount.balance()).toEqual(300.00);
  });

  it('adds a deposit of 300.00 to the transaction list', () => {
    bankAccount.deposit(300.00);
    expect(bankAccount.viewTransactions()).toContain(300.00);
  });

  it('can handle a withdrawal of 100.00', () => {
    bankAccount.deposit(300.00);
    bankAccount.withdrawal(100.00);
    expect(bankAccount.balance()).toEqual(200.00);
  });

  it('each transaction has a date', () => {
    bankAccount.deposit(300.00);
    let date = "17/7/2018"
    expect(bankAccount.viewTransactions()).toContain(date);
  })

  describe('when the withdrawal is greater than the balance', () => {
    it('does not allow the transaction', () => {
      bankAccount.deposit(100);
      expect( function() {bankAccount.withdrawal(200);}).toThrowError('Insufficient funds, please try again');
    });
  });

});
