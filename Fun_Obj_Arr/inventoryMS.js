// Inventory Management System:


//1.  Define an array called inventory containing several objects, each representing a product in the store's inventory. Each object should have properties such as id, name, price, quantity, and any other relevant details.

let inventory_Array = [
    {
        id: 1,
        name: 'ram',
        price: 2000,
        quantity: 10
    },
    {
        id: 2,
        name: 'adity',
        price: 3000,
        quantity: 20
    },
    {
        id: 3,
        name: 'jaya',
        price: 4000,
        quantity: 30

    },
]
//2.  Create a class called Product to represent a product, and use this class to create objects for each product in the inventory array.

class Product {
    constructor(id, name, price, quantity){
        this.id = id,
        this.name = name,
        this.price = price,
        this.quantity = quantity
    }
}
let inventory = new Product(6, 'kopal' , 10000, 50);
// console.log(inventory);

//3.  Define functions addProduct() to add a new product to the inventory, updateProduct() to update the quantity of an existing product, removeProduct() to remove a product from the inventory, and displayProducts() to display all the products in the current inventory in the following format: ProductName - Price (Quantity). Try to think of the function arguments on your own.


// --------------------------------------------Add--------------------------------------------
function addProduct(id, name, price, quantity){
    inventory_Array.push({id, name, price, quantity})
    console.log(inventory_Array);
}
addProduct(6, 'imani', 689,344 );



// ----------------------------------------update-------------------------------------------
function updateProduct(id, updateName){
    let i=0;
    while (i<inventory_Array.length){
        if (inventory_Array[i].id === id){
            inventory_Array[i].name = updateName;
        }
        i+=1
    }
    console.log(inventory_Array);
}
updateProduct(2, 'deepu')



// ------------------------------------------remove-----------------------------------------
function removeProduct(id){
    let i=0;
    while (i<inventory_Array.length){
        if (inventory_Array[i].id === id){
            inventory_Array.splice(i,1);
        }
        i+=1
    }
    console.log(inventory_Array);
}
removeProduct(1)


// --------------------display-------------------------------


function displayProduct(){
    let i = 0;
    while (i<inventory_Array.length){
        console.log(inventory_Array[i]);
        i+=1
    }
}
displayProduct()