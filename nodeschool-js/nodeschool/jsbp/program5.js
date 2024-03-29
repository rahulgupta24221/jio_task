

// Coin denominations and their values
const coinValues = {
    penny: 1,
    nickel: 5,
    dime: 10,
    quarter: 25
};

// Function to get the value of a coin denomination
function getAmount(coinType) {
    // Check if the coinType exists in the coinValues object
    if (coinType in coinValues) {
        // Return the value of the coin denomination
        return coinValues[coinType];
    } else {
        // If coinType is not recognized, return 0
        return 0;
    }
}

module.exports = getAmount;
