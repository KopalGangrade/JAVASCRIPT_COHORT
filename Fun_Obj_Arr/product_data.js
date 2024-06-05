// Manipulating Product Data:

// Define a variable named products and assign it an array containing several objects. Each object should represent a product and have properties like id, name, price, and category.

let products = [
    {
        id: 1,
        name: 'kopal', 
        price: 200,
        category: 'games'
    },
    {
        id: 2,
        name: 'siya',
        price: 5,
        category: 'drink'
    },
    {
        id: 3,
        name: 'riya',
        price: 8,
        category: 'food'
    },
]

// Use the forEach method to iterate over the products array and log each product's name and price to the console.

// products.forEach(element => {
//     console.log(element);
// });

// Assume a tax rate of 10%. Use the map method to create a new array called productsWithTax that includes each product's name and a new price which is the original price plus the tax. Log the productsWithTax array to the console.

productsWithTax = products.map((e)=>{
    newPrice = (e.price)*10/100;
    // console.log(e.name, e.price+newPrice);
});


// Use the filter method to create a new array called foodProducts that contains only the products from the category "Food". Log the foodProducts array to the console.

foodProduct=products.filter(e => e.category === 'food');
// console.log(foodProduct);


// Use filter to find products with a price under $10, then map to return a string for each that includes the name and price (e.g., "Banana - $1.99"). Store these strings in an array called affordableProducts and log it to the console.

const affordableProducts = products.filter((e)=> e.price<10);
console.log(affordableProducts);



// Initialize a variable totalPrice to 0. Use forEach to sum up the prices of all products and update totalPrice. Log totalPrice after the loop.

let totalPrice = 0;
products.forEach(element => {
    totalPrice+=element.price
});
// console.log(totalPrice);





