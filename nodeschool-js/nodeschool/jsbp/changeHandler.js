
let balance = 0;

// Function to get the current balance amount
function getAmount() {
    return balance;
}



function convertToChange(cents) {
    const coinValues = {
        quarter: 25,
        dime: 10,
        nickel: 5,
        penny: 1
    };

    
    const result = [];


    for (const [coin, value] of Object.entries(coinValues)) {
        // Calculate the number of coins 
        const count = Math.floor(cents / value);

        // Add the coin to the result array 'count' times
        for (let i = 0; i < count; i++) {
            result.push(coin[0]); 
        }

        // Update the remaining cents
        cents %= value;
    }

    return result;
}



module.exports = {
    getAmount,
    convertToChange
};

