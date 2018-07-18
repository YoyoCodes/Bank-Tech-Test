# Bank Tech Test

To interact with the app just fork the repo and clone it.
Open SpecRunner in the browser to run the tests.
Open the console on the same page to interact with the code.

## Requirements
<ul>
  <li>You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)</li>
  <li>Deposits, withdrawal.</li>
  <li>Account statement (date, amount, balance) printing.</li>
  <li>Data can be kept in memory (it doesn't need to be stored to a database or anything).</li>
</ul>

## Acceptance criteria
**Given** a client makes a deposit of 1000 on 10-01-2012<br>
**And** a deposit of 2000 on 13-01-2012<br>
**And** a withdrawal of 500 on 14-01-2012<br>
**When** she prints her bank statement<br>
**Then** she would see<br>


```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## Aproach
<p>I decided  to try doing this project in Javascript using SE6 syntax and combining the module patters with prototypes mostly because I was curious about this aproach and how all would tie in together. My initial diagram consisted of three main modules. I constructed the first two separately and the third one I extracted from the main module, Bank Account. 
<p>The second step was writing user stories for the requirements:<p>

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

### Sample of how the code works:
<a href="https://ibb.co/iK9vDd"><img src="https://preview.ibb.co/i4i0eJ/Console.png" alt="Console" border="0"></a>

## Running the tests
### Testing framework: Jasmine
<a href="https://ibb.co/jVtNtd"><img src="https://preview.ibb.co/b8MmKJ/Tests.png" alt="Tests" border="0"></a>
