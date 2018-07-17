'use strict'
describe('AccountStatement', () => {
  it('is defined', () => {
    let statement = new AccountStatement;
    expect(statement).toEqual(jasmine.any(AccountStatement));
  })
})
