'use strict'
describe('Bank Account', () => {
  let bankAccount;
  let date;
  let header;
  let transaction;

  beforeEach(() => {
    bankAccount = new BankAccount;
    date = "17/7/2018"
    header = '  date || credit || debit || balance  ';
    transaction = '17/7/2018  ||  300  ||  ||  300';
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
    expect(bankAccount.viewTransactions()).toContain(['17/7/2018', 300, 300]);
  });

  it('can handle a withdrawal of 100.00', () => {
    bankAccount.deposit(300.00);
    bankAccount.withdrawal(100.00);
    expect(bankAccount.balance()).toEqual(200.00);
  });

  it('each transaction has a date', () => {
    bankAccount.deposit(300.00);
    expect(bankAccount.viewTransactions()).toContain(['17/7/2018', 300, 300]);
  })

  it('prints a statement', () => {
    bankAccount.deposit(300.00);
    spyOn(console, 'log');
    bankAccount.viewStatement();
    expect(console.log).toHaveBeenCalledWith(header);
    expect(console.log).toHaveBeenCalledWith(transaction);
  })

  describe('when the withdrawal is greater than the balance', () => {
    it('does not allow the transaction', () => {
      bankAccount.deposit(100);
      expect( function() {bankAccount.withdrawal(200);}).toThrowError('Insufficient funds, please try again');
    });
  });

});
