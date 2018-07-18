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
    jasmine.clock().install();
    let fakeDate = new Date(2010, 1, 1);
    jasmine.clock().mockDate(fakeDate);
    transactionHistory.add(amount, balance);
    expect(transactionHistory.showList()).toEqual([{"date" : fakeDate.toLocaleDateString("en-GB"), "amount" : amount, "balance" : balance}]);
    jasmine.clock().uninstall();
  });
});
