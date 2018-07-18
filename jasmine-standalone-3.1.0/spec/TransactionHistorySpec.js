'use strict'
describe('TransactionHistory', () => {
  let transactionHistory;
  let expected;

  beforeEach(() => {
    transactionHistory = new TransactionHistory;
  });

  it('has a default empty transaction list', () => {
    expect(transactionHistory.showList()).toEqual([]);
  });
});
