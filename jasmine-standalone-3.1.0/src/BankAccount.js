'use strict'
function BankAccount(AccountStatement) {
  this._balance = 0.00;
  this._transactionList = [];
};

BankAccount.prototype.balance = function() {
  return this._balance
};

BankAccount.prototype.viewTransactions = function() {
  return this._transactionList
};

BankAccount.prototype.deposit = function(amount) {
  this._balance += amount;
};

BankAccount.prototype.withdrawal = function(amount) {
  if (amount > this._balance) {
    throw new Error('Insufficient funds, please try again');
  }else{
    this._balance -= amount;
  }
};
