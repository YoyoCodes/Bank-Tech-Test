'use strict'
describe('Bank Account', () => {
  let bankAccount;
  let date;
  let header;
  let transaction;
  let fakeHistory;
  let newBankAccount;
  let fakeStatement;

  beforeEach(() => {
    bankAccount = new BankAccount;
    fakeHistory = jasmine.createSpyObj('TransactionHistory',['add', 'showList']);
    fakeStatement = jasmine.createSpyObj('AccountStatement',['handleStatement']);
    newBankAccount = new BankAccount(fakeHistory, fakeStatement);
  });

  it('has a default balance of 0.00', () => {
    expect(bankAccount.balance()).toEqual(0.00);
  });

  it('prints a statement', () => {
    newBankAccount.viewStatement();
    expect(fakeStatement.handleStatement).toHaveBeenCalled();
  });

  describe('#deposit', () => {
    describe('-successful deposit', () => {
      it('increases the balance by 300.00', () => {
        newBankAccount.deposit(300.00);
        expect(newBankAccount.balance()).toEqual(300.00);
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
        newBankAccount.deposit(300.00);
        newBankAccount.withdrawal(100.00);
        expect(newBankAccount.balance()).toEqual(200.00);
      });
    });

    describe('-unsuccessful withdrawal', () => {
        it('when the withdrawal is greater than the balance', () => {
          newBankAccount.deposit(100);
          expect( function() {newBankAccount.withdrawal(200);}).toThrowError('Insufficient funds, please try again');
        });

        it('when user input is a string', () => {
          expect( function() {bankAccount.withdrawal('string');}).toThrowError('Incorrect input, please try again');
        });
    });
  });
});
