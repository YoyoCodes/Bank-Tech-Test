'use strict'
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
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    return  day + "/" + month + "/" + year;
  };

exports.TransactionHistory = TransactionHistory;
})(this);
