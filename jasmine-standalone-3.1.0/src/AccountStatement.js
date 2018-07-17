'use strict'
function AccountStatement(transactions) {
  this.header  = "  date || credit || debit || balance  ";
  this.transactions = transactions;
  this.statement = [];
};

AccountStatement.prototype.generateStatement = function () {
  this.statement.push(this.header);
  let numberOfTransactions = this.transactions.length - 1;
  for (let i = numberOfTransactions; i >= 0; i--) {
    if (this.transactions[i][1] > 0) {
      this.statement.push(
        this.transactions[i][0] +
        "  ||  " +
        this.transactions[i][1] +
        "  ||  ||  " +
        this.transactions[i][2]
      )
    }else{
      this.statement.push(
        this.transactions[i][0] +
        "  ||  ||  " +
        this.transactions[i][1] * (-1) +
        "  ||  " +
        this.transactions[i][2]
      )
    }
  }
  return this.statement;
}

AccountStatement.prototype.printStatement = function () {
  for (let i = 0; i<this.statement.length; i++) {
    console.log(this.statement[i]);
  }
}
