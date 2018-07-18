'use strict'
describe('TransactionHistory', () => {
  let transactionHistory;

  beforeEach(() => {
    transactionHistory = new TransactionHistory;
  });

  it('has a default empty transaction list', () => {
    expect(transactionHistory.showList()).toEqual([]);
  });

  it('can add a transaction to the list', () => {
    let amount = 100.00;
    let balance = 100.00;
    let date = "18/07/2018";
    transactionHistory.add(amount, balance);
    expect(transactionHistory.showList()).toEqual([{"date" : date, "amount" : amount, "balance" : balance}])
  });
});
