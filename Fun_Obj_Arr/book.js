// Bookstore Management System:

//1.  Define an array called inventory containing several objects, each representing a book in the bookstore's inventory. Each book object should have properties such as id, title, author, price, quantity, and any other relevant details.
let inventory_Array = [
    {
        id: 1,
        title: 'Book 1',
        author: 'hanrry',
        price: 200,
        quantity: 4,
        page: 230
    },
    {
        id: 2,
        title: 'Book 2',
        author: 'hanrry-2',
        price: 300,
        quantity: 6,
        page: 180
    },
    {
        id: 3,
        title: 'Book 3',
        author: 'hanrry-3',
        price: 400,
        quantity: 4,
        page:450
    }
]

//2.  Create a class called Book to represent a book, and use this class to create objects for each book in the inventory array.

class Book{
    constructor(id, title, author, price, quantity, page){
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
        this.page = page;
    }
}
let book = new Book(3, 'book-9', 'dm krishna', 400, 4, 150);
// console.log(book);
//3.  Define functions addBook() to add a new book to the inventory, updateBook() to update the quantity of an existing book, removeBook() to remove a book from the inventory, and displayBooks() to display all books in the current inventory in the following format: BookTitle - Price (Quantity).

// ---------------------------------------------------------------------
function addBook(id, title, author, price, quantity, page){
    
        inventory_Array[i].push({id, title, author, price,quantity, page});

}
addBook(4, 'book-4', 'harry-4', 465, 12, )

// ----------------------------------------------------------------------
function updateBook(id,page){
    let i=0;
    while (i<inventory_Array.length){
        if (inventory_Array[i].id===id){
            inventory_Array[i].page=page;
        }
        i+=1
    }
    console.log(inventory_Array);
}
updateBook(2,100)


// ----------------------------------------------------------------------

function removeBook(price){
    let i = 0;
    while (i < inventory_Array.length){
        if (inventory_Array[i].price==price){
            {}
        }else{
            console.log(inventory_Array[i]);
        }
        i+=1
    }
}
removeBook(400)


// ----------------------------------------------------------------------

function displayBooks(){
    let i = 0;
    while (i<inventory_Array.length){
        console.log(`${inventory_Array[i].title} - ${inventory_Array[i].price} ${inventory_Array[i].quantity}`);
        i+=1
    }
}
// displayBooks()