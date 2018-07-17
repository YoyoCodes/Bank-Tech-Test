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

  it('prints a statement', () => {
    bankAccount.deposit(300.00);
    spyOn(console, 'log');
    bankAccount.viewStatement();
    expect(console.log).toHaveBeenCalledWith(header);
    expect(console.log).toHaveBeenCalledWith(transaction);
  });

  describe('#deposit', () => {
    it('increases the balance by 300.00', () => {
      bankAccount.deposit(300.00);
      expect(bankAccount.balance()).toEqual(300.00);
    });

    it('adds a deposit of 300.00 to the transaction list', () => {
      spyOn(bankAccount._transactionList, "add");
      bankAccount.deposit(300.00);
      expect(bankAccount._transactionList.add).toHaveBeenCalled();
    });
  })

  describe('#withdrawal', () => {
    it('decreases the balance by 100.00', () => {
      bankAccount.deposit(300.00);
      bankAccount.withdrawal(100.00);
      expect(bankAccount.balance()).toEqual(200.00);
    });

    it('adds a withdrawal of 100.00 to the transaction list', () => {
      spyOn(bankAccount._transactionList, "add");
      bankAccount.deposit(200.00);
      bankAccount.withdrawal(100.00);
      expect(bankAccount._transactionList.add).toHaveBeenCalled();
    });

    describe('when the withdrawal is greater than the balance', () => {
      it('does not allow the transaction', () => {
        bankAccount.deposit(100);
        expect( function() {bankAccount.withdrawal(200);}).toThrowError('Insufficient funds, please try again');
      });
    });
  });

});
