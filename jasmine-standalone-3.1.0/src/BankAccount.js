(function(exports) {
  'use strict'

  function BankAccount() {
    this._balance = 0.00;
    this._transactionList = new TransactionHistory;
  };

  BankAccount.prototype.balance = function() {
    return this._balance;
  };

  BankAccount.prototype.viewTransactions = function() {
    return this._transactionList
  };

  BankAccount.prototype.deposit = function(amount) {
    this._balance += amount;
    this._transactionList.add(amount, this._balance);
  };

  BankAccount.prototype.withdrawal = function(amount) {
    if (amount > this._balance) {
      throw new Error('Insufficient funds, please try again');
    }else{
      this._balance -= amount;
      this._transactionList.add(-amount, this._balance);
    };
  };

  BankAccount.prototype.viewStatement = function() {
    let statement = new AccountStatement(this._transactionList.showList());
    statement.generateStatement();
    statement.printStatement();
  };

exports.BankAccount = BankAccount;
})(this);
