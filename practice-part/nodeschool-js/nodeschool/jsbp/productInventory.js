

//Sample product data
const products = [
    { name: 'Coke', price: 1.25, quantity: 10 },
    { name: 'Chips', price: 1.50, quantity: 8 },
    { name: 'Candy', price: 0.75, quantity: 12 }
];


function getProduct(name) {
    return products.find(product => product.name === name);
}


// Function to get all products
function getProducts() {
    return products;
}


module.exports = {
    getProducts,
    getProduct
};
