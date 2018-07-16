'use strict'
function BankAccount() {
  this._balance = 0;
};

BankAccount.prototype.balance = function() {
  return this._balance
};

BankAccount.prototype.deposit = function(amount) {
  this._balance += amount;
};

BankAccount.prototype.withdrawal = function(amount) {
  this._balance -= amount;
};
