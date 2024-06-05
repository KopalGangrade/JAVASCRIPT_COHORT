// Shopping Cart:
//1.  Define an array called cart containing several objects, each representing an item in the shopping cart. Each object should have properties such as name, price, and quantity.
let cart = [
    {
        name:'kopal',
        price: 200,
        quantity: 100
    },
    {
        name:'kopal',
        price: 200,
        quantity: 100
    },
    {
        name:'kopal',
        price: 200,
        quantity: 100
    }
]


//2.  Define a function called calculateTotalPrice() that takes the shopping cart array as input and returns the total price of all items in the shopping cart.

// function calculateTotalPrice(cart){
//     if (cart.length === 0){
//         return 0;
//     }
//     let sum = 0;
//     for (let i in cart) {
//         sum+= cart[i].price;
//     }
//     return sum;
// }
// let result = calculateTotalPrice(cart);
// console.log(result);

function calculateTotalPrice(cart){
    let sum = 0;
    let i = 0;
    while (i < cart.length){
        sum += cart[i].price;
        i+=1
    }
    return sum;
}
let result = calculateTotalPrice(cart);
console.log(result)


//3.  Call the calculateTotalPrice() function with the cart array as an argument and log the result to the console.

// function calculateTotalPrice(cart) {
//     console.log(cart);
// }
// calculateTotalPrice(cart);