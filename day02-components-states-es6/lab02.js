class Transaction {
    constructor(accountNumber, type, amount) {
        this.accountNumber = accountNumber;
        this.type = type;
        this.amount = amount;
        this.time = new Date().toLocaleTimeString();
    }
}

class Account {
    constructor(accountNumber, balance) {
        if(balance < 10000) {
            throw new Error('Initial Balance should be greater than 10000');
        }
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.withdrawCount = 0;
        this.transactions = [];
    }

    deposit(amount) {
        this.balance += amount;
        this.transactions.push(new Transaction(this.accountNumber, "CR", amount));
    }

    withdraw(amount) {
        if(amount > this.balance) {
            throw new Error('Insufficient balance');
        }
        this.balance -= amount;
        this.transactions.push(new Transaction(this.accountNumber, "DR", amount));

        this.withdrawCount += 1;
        if(this.withdrawCount > 3) {
            let fee = amount * 0.005;
            this.balance -= fee;
            this.transactions.push(new Transaction(this.accountNumber, "Fees", fee));
        }
    }

    printStatement() {
        console.log(`-------Statement for ${this.accountNumber}----------`)
        for(let i = 0; i < this.transactions.length; i++) {
            let txn = this.transactions[i];
            console.log(`${txn.amount} - (${txn.type}) on ${txn.time}`);
        }
    }
}

let account = new  Account(32487, 20000);
account.deposit(1000);
account.deposit(1000);
account.withdraw(100);
account.withdraw(100);
account.withdraw(100);
account.withdraw(100);
console.log(`Balance: ${account.balance}`);
account.printStatement();

try {
    account.withdraw(9328473);    
} catch (error) {
    console.log(`Error: ${error.message}`)
}



