'use strict';
(function(exports) {
  function AccountStatement() {
    this.header  = "  date || credit || debit || balance  ";
    this.statement = [];
  };

  AccountStatement.prototype.handleStatement = function (transactions) {
      this.generateStatement(transactions);
      this.printStatement();
  };

  AccountStatement.prototype.generateStatement = function (transactions) {
    this.statement.push(this.header);
    for (let i = transactions.length - 1; i >= 0; i--) {
      let params = {"date" : transactions[i]["date"], "amount" : transactions[i]["amount"].toFixed(2), "balance" : transactions[i]["balance"].toFixed(2)};
      if (transactions[i]["amount"] > 0) {
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
