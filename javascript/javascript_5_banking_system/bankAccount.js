class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.log("Deposit amount must be greater than 0.");
            return;
        }

        this.balance += amount;
        console.log(
            `${this.accountHolder} deposited £${amount.toFixed(2)}.`
        );
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Withdrawal amount must be greater than 0.");
            return;
        }

        if (amount > this.balance) {
            console.log(
                `Insufficient funds. ${this.accountHolder} only has £${this.balance.toFixed(2)} available.`
            );
            return;
        }

        this.balance -= amount;
        console.log(
            `${this.accountHolder} withdrew £${amount.toFixed(2)}.`
        );
    }

    checkBalance() {
        console.log(
            `${this.accountHolder}'s balance is £${this.balance.toFixed(2)}.`
        );

        return this.balance;
    }
}

// Make the class work with Node.js
if (typeof module !== "undefined" && module.exports) {
    module.exports = BankAccount;
}

// Make the class available in the browser
if (typeof window !== "undefined") {
    window.BankAccount = BankAccount;
}
