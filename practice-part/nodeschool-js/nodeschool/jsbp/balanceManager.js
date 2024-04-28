// balanceManager.js

// Variables related to balance management
let balance = 0;

// Methods for balance management
function addBalance(amount) {
    balance += amount;
}
function increaseBalance(amount) {
    balance += amount;
}

function canAfford(amount) {
    return balance >= amount;
}

function decreaseBalance(amount) {
    if (canAfford(amount)) {
        balance -= amount;
        return true; 
    } else {
        return false; 
    }
}

function deductBalance(amount) {
    balance -= amount;
}

function getBalance() {
    return balance;
}

function resetBalance() {
    balance = 0;
}

module.exports = {
    addBalance,
    deductBalance,
    getBalance,
    resetBalance,
    increaseBalance,
    canAfford,
    decreaseBalance

};
