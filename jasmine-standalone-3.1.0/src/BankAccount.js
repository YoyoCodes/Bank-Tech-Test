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
  this._transactionList.push(_getDate(), amount)
};

BankAccount.prototype.withdrawal = function(amount) {
  if (amount > this._balance) {
    throw new Error('Insufficient funds, please try again');
  }else{
    this._balance -= amount;
    this._transactionList.push(_getDate(), -amount)
  }
};

function _getDate() {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  return  day + "/" + month + "/" + year;
}
