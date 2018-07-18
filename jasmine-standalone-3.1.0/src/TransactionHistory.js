'use strict';
(function(exports) {
  function TransactionHistory() {
    this.list = [];
  };

  TransactionHistory.prototype.add = function(amount, balance) {
    this.list.push(
                    {
                      "date" : _getDate(),
                      "amount" : amount,
                      "balance" : balance,
                    }
                  )
  };

  TransactionHistory.prototype.showList = function() {
    return this.list;
  };

  function _getDate() {
    let date = new Date();
    return date.toLocaleDateString("en-GB");
  };

exports.TransactionHistory = TransactionHistory;
})(this);
