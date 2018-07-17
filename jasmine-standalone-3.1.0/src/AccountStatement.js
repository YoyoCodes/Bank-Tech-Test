'use strict';
(function(exports) {
  function AccountStatement(transactions) {
    this.header  = "  date || credit || debit || balance  ";
    this.transactions = transactions;
    this.statement = [];
  };

  AccountStatement.prototype.generateStatement = function () {
    this.statement.push(this.header);
    let numberOfTransactions = this.transactions.length - 1;
    for (let i = numberOfTransactions; i >= 0; i--) {
      if (this.transactions[i]["amount"] > 0) {
        this.statement.push(_generateCredit(
                                            this.transactions[i]["date"],
                                            this.transactions[i]["amount"].toFixed(2),
                                            this.transactions[i]["balance"].toFixed(2))
                                          )
      }else{
        this.statement.push(_generateDebit(
                                            this.transactions[i]["date"],
                                            this.transactions[i]["amount"].toFixed(2),
                                            this.transactions[i]["balance"].toFixed(2))
                                          )
      };
    };
    return this.statement;
  };

  AccountStatement.prototype.printStatement = function () {
    for (let i = 0; i<this.statement.length; i++) {
      console.log(this.statement[i]);
    };
  };

  function _generateCredit(date, amount, balance) {
    return date + "  ||  " + amount + "  ||  ||  " + balance;
  };

  function _generateDebit(date, amount, balance) {
    return date + "  ||  ||  " + amount*(-1) +   "  ||  " + balance;
  };

exports.AccountStatement = AccountStatement;
})(this);
