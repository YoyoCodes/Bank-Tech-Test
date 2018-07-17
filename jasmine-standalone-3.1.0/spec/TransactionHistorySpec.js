'use strict'
describe('TransactionHistory', () => {
  let transactionHistory;
  let expected;

  beforeEach(() => {
    transactionHistory = new TransactionHistory;
    expected = {
      "date" : "17/07/2018",
      "amount" : 100.00,
      "balance" : 100.00
    }
  });

  it('has a default empty transaction list', () => {
    expect(transactionHistory.showList()).toEqual([]);
  });
})
