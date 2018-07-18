'use strict'
describe('Bank Account', () => {
  let bankAccount;
  let date;
  let header;
  let transaction;

  header = '  date || credit || debit || balance  ';
  transaction = '18/07/2018  ||  300.00  ||  ||  300.00';

  beforeEach(() => {
    bankAccount = new BankAccount;
  });

  it('has a default balance of 0.00', () => {
    expect(bankAccount.balance()).toEqual(0.00);
  });

  it('prints a statement', () => {
    let fakeStatement = jasmine.createSpyObj('AccountStatement',['handleStatement']);
    let fakeHistory = new TransactionHistory();
    spyOn(fakeHistory, 'showList').and.returnValue([]);
    let newBankAccount = new BankAccount(fakeHistory, fakeStatement);
    newBankAccount.viewStatement();
    expect(fakeStatement.handleStatement).toHaveBeenCalledWith([]);
  });

  describe('#deposit', () => {
    describe('-successful deposit', () => {
      it('increases the balance by 300.00', () => {
        bankAccount.deposit(300.00);
        expect(bankAccount.balance()).toEqual(300.00);
      });
    });

    describe('-unsuccessful deposit', () => {
      it('when the user input is a string', () => {
        expect( function() {bankAccount.deposit('string');}).toThrowError('Incorrect input, please try again');
      });

      it('when the amount is negative', () => {
        expect( function() {bankAccount.deposit(-100.00);}).toThrowError('Incorrect input, please try again');
      });
    });
  })

  describe('#withdrawal', () => {
    describe('-successful withdrawal', () => {
      it('decreases the balance by 100.00', () => {
        bankAccount.deposit(300.00);
        bankAccount.withdrawal(100.00);
        expect(bankAccount.balance()).toEqual(200.00);
      });
    });

    describe('-unsuccessful withdrawal', () => {
        it('when the withdrawal is greater than the balance', () => {
          bankAccount.deposit(100);
          expect( function() {bankAccount.withdrawal(200);}).toThrowError('Insufficient funds, please try again');
        });

        it('when user input is a string', () => {
          expect( function() {bankAccount.withdrawal('string');}).toThrowError('Incorrect input, please try again');
        });
    });
  });
});
