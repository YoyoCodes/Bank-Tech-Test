'use strict'
describe('Feature', () => {
  it('a user can make a deposit', () => {
    let bankAccount = new BankAccount;
    bankAccount.deposit(500);
    expect(bankAccount.balance()).toEqual(500);
  });

  it('a user can see a bank statement', () => {
    let bankAccount = new BankAccount;
    let printer = new StatementPrinter;
    spyOn(console, 'log');
    printer.viewStatement();
    expect(console.log).toHaveBeenCalled();
  });
});
