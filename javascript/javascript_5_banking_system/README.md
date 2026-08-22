**Simple Banking System**

A simple banking system created using HTML, JavaScript, and object-oriented programming concepts. The project allows bank accounts to be created and provides basic functionality for depositing money, withdrawing money, and checking an account balance.

This project was created to practise fundamental JavaScript concepts and demonstrate how JavaScript can be used within a web browser.

**Features**

- Create multiple bank accounts
- Store an account number, account holder, and balance
- Deposit money into an account
- Withdraw money from an account
- Check the current account balance
- Prevent withdrawals when there are insufficient funds
- Prevent invalid deposit and withdrawal amounts
- Interact with bank accounts through the browser console

**Project Structure**

**bankAccount.js**

Contains the BankAccount class and its methods for managing an account.

**index.js**

Creates instances of the BankAccount class and demonstrates deposits, withdrawals, and balance checks.

**index.html**

Provides the webpage for the project and loads the JavaScript files so that the banking system can be accessed through the browser.

**JavaScript Concepts Used**

**Classes and Objects**

The project uses a BankAccount class as a template for creating bank account objects.

Each account has properties such as:

- accountNumber
- accountHolder
- balance

Different accounts can then be created as instances of the class.

**Constructors**

The constructor method is used to initialise each new bank account with its account number, account holder, and starting balance.

**Methods**

The BankAccount class contains methods that allow each account to perform different actions:

- deposit() – adds money to the account
- withdraw() – removes money from the account
- checkBalance() – displays the current account balance

**Conditional Statements**

if statements are used to validate transactions. For example, the program checks whether a withdrawal would exceed the available balance and whether deposit or withdrawal amounts are valid.

**Variables and Constants**

Variables and constants are used to store account objects, transaction amounts, and other values required by the program.

**Template Literals**

Template literals are used to include values inside messages displayed in the console.

**Browser Console**

console.log() is used to display information about transactions and account balances. This makes it possible to test and interact with the banking system through the browser's developer console.

**Running the Project in a Browser**

For security reasons, the project should be run using a local web server rather than opening `index.html` directly using a `file:///` address.

**Using the Banking System**

Open your browser's Developer Tools and select the Console tab.

You can then interact with the bank accounts using JavaScript commands such as:

account1.checkBalance();

Deposit money:

account1.deposit(100);

Withdraw money:

account1.withdraw(50);

Check the updated balance:

account1.checkBalance();

The results of each operation will be displayed in the browser console.

**What I Learnt**

This project demonstrates some of the core concepts of JavaScript and object-oriented programming in a small practical application.

It provides experience working with classes, objects, constructors, methods, conditional statements, validation, and browser-based JavaScript.
