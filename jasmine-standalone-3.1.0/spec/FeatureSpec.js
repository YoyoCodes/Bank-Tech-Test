'use strict'
describe('Feature', () => {
  it('a user can make a deposit', () => {
    let bankAccount = new BankAccount;
    bankAccount.deposit(500);
    expect(bankAccount.balance()).toEqual(500);
  });

  it('a user can see a bank statement', () => {
    let statement = new BankStatement;
    let bankAccount = new BankAccount(statement);
    let printer = new Printer(statement);
    bankAccount.deposit(100);
    console.log = jasmine.createSpy("pretty message");
    let task = printer.viewStatement();
    expect(console.log).toHaveBeenCalledWith(task);
  });
});
