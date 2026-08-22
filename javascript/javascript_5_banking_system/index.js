// Import BankAccount when running with Node.js.
// In the browser, BankAccount is available through window.BankAccount.
const BankAccountClass =
    typeof require !== "undefined"
        ? require("./bankAccount.js")
        : window.BankAccount;

console.log("=== Simple Banking System ===");

// Create bank accounts
const account1 = new BankAccountClass(
    "ACC001",
    "Alice Smith",
    1000
);

const account2 = new BankAccountClass(
    "ACC002",
    "Bob Jones",
    500
);

// Account 1 tests
console.log("\n--- Alice's Account ---");

account1.checkBalance();
account1.deposit(250);
account1.withdraw(100);
account1.checkBalance();

// Account 2 tests
console.log("\n--- Bob's Account ---");

account2.checkBalance();
account2.deposit(400);
account2.withdraw(150);
account2.checkBalance();

// Test insufficient funds
console.log("\n--- Testing Insufficient Funds ---");
account2.withdraw(2000);

// Test invalid amounts
console.log("\n--- Testing Invalid Amounts ---");
account1.deposit(-100);
account1.withdraw(-50);

// Allow accounts to be accessed from the browser console
if (typeof window !== "undefined") {
    window.account1 = account1;
    window.account2 = account2;

    console.log(
        "\nTry account1.deposit(100), account1.withdraw(50), or account1.checkBalance() in the console."
    );
}
