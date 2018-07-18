'use strict';

(function(exports) {
  function BankAccount(transaction = new TransactionHistory, statement = new AccountStatement) {
    this._balance = 0.00;
    this._transactionList = transaction;
    this._statement = statement;
  };

  BankAccount.prototype.balance = function() {
    return this._balance;
  };

  BankAccount.prototype.viewTransactions = function() {
    return this._transactionList
  };

  BankAccount.prototype.deposit = function(amount) {
    if (isNaN(amount)) {
      throw new Error('Incorrect input, please try again');
    }else if( amount < 0) {
      throw new Error('Incorrect input, please try again');
    }else{
      this._balance += amount;
      this._transactionList.add(amount, this._balance);
    };
  };

  BankAccount.prototype.withdrawal = function(amount) {
    if (amount > this._balance) {
      throw new Error('Insufficient funds, please try again');
    }else if (isNaN(amount)) {
      throw new Error('Incorrect input, please try again');
    }else{
      this._balance -= amount;
      this._transactionList.add(-amount, this._balance);
    };
  };

  BankAccount.prototype.viewStatement = function() {
    this._statement.handleStatement(this._transactionList.showList());
  };

exports.BankAccount = BankAccount;
})(this);
