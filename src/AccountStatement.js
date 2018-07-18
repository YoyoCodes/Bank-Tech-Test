'use strict';
(function(exports) {
  function AccountStatement(transactions) {
    this.header  = "  date || credit || debit || balance  ";
    this.transactions = transactions;
    this.statement = [];
  };

  AccountStatement.prototype.generateStatement = function () {
    this.statement.push(this.header);
    for (let i = this.transactions.length - 1; i >= 0; i--) {
      let params = {"date" : this.transactions[i]["date"], "amount" : this.transactions[i]["amount"].toFixed(2), "balance" : this.transactions[i]["balance"].toFixed(2)};
      if (this.transactions[i]["amount"] > 0) {
        this.statement.push(_generateCredit(params));
      }else{
        this.statement.push(_generateDebit(params));
      };
    };
    return this.statement;
  };

  AccountStatement.prototype.printStatement = function () {
    for (let i = 0; i<this.statement.length; i++) {
      console.log(this.statement[i]);
    };
  };

  function _generateCredit(params) {
    return params["date"] + "  ||  " + params["amount"] + "  ||  ||  " + params["balance"];
  };

  function _generateDebit(params) {
    return params["date"] + "  ||  ||  " + params["amount"]*(-1) +   "  ||  " + params["balance"];
  };

exports.AccountStatement = AccountStatement;
})(this);
