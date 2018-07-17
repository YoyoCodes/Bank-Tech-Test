# Bank Tech Test

## Requirements
<ul>
  <li>You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)</li>
  <li>Deposits, withdrawal.</li>
  <li>Account statement (date, amount, balance) printing.</li>
  <li>Data can be kept in memory (it doesn't need to be stored to a database or anything).</li>
</ul>

## Acceptance criteria
**Given** a client makes a deposit of 1000 on 10-01-2012
**And** a deposit of 2000 on 13-01-2012
**And** a withdrawal of 500 on 14-01-2012
**When** she prints her bank statement
**Then** she would see


```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## Aproach

Writing user stories for the requirements: <br>

```
As a user
So I can save money
I want to be able to make a deposit into a bank account

As a user
So I can use money
I want to be able to make a withdrawal

As a user
So I can keep track of transactions
I want each transaction to have a date.
```

## Getting started

## Running the tests

<img src="https://ibb.co/mb1Vwy"/>
