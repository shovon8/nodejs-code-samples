// Project 1 - BankAccount module
function BankAccount(userData) {
    var firstName = userData.firstName;
    var lastName = userData.lastName;
    var balance = userData.balance;
    var transactions = [];

    transactions.push("initial balance " + balance + "$");


    function withdraw(amount) {
        if(amount < balance) {
            balance -= amount;
            transactions.push(amount + "$ has been deduced");
        }
    }


    function deposit(amount) {
        if(amount > 0) {
            balance += amount;
            transactions.push(amount + "$ has been added");
        }
    }


    function buy(amount) {
        var amountTaxIncluded = amount + amount * 0.05; // 5% tax

        if(amountTaxIncluded < balance) {
            balance -= amountTaxIncluded;
            transactions.push(amountTaxIncluded + "$ has been deduced");
        }
    }


    function getFullName() {
        return firstName + " " + lastName;
    }


    function printStatement() {
        console.log("----------------------------------------");
        console.log(this.getName());
        console.log("Balance: " + this.balance() + "$\n");
        console.log("Transactions:");
        for(var i = 0; i < transactions.length; i++) {
            console.log(transactions[i]);
        }
        console.log("----------------------------------------\n");
    }


    var publicAPI = {
        getName: getFullName,
        withdraw: withdraw,
        deposit: deposit,
        buy: buy,
        balance: function() {
            return balance;
        },
        enableUppercaseName: function() { // prints uppercase account holder name on statement
            this.getName = function() {
                return getFullName().toUpperCase();
            }
        },
        printStatement: printStatement
    };


    return publicAPI;
}



var shovon = BankAccount({
    firstName: "Shahriar",
    lastName: "Shovon",
    balance: 500
});

shovon.enableUppercaseName();

shovon.deposit(10);
shovon.withdraw(25);
shovon.buy(24);

shovon.printStatement();











var cindy = BankAccount({
    firstName: "Cindy",
    lastName: "Parker",
    balance: 100
});

// cindy.enableUppercaseName();

cindy.deposit(15);
cindy.withdraw(30);
cindy.buy(28);

cindy.printStatement();