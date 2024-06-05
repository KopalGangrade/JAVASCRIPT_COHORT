// Expense Tracker:

//1.  Define an array called expenses containing several objects, each representing an expense. Each expense object should have properties such as id, name, amount, date, and any other relevant details.
let expense = [
    {
        id: 1,
        name: 'novita',
        amount:2000,
        date: '20.5.2001'
    },
    {
        id: 2,
        name: 'jiyan',
        amount:3000,
        date: '20.6.2002'
    },
    {
        id: 5,
        name: 'doremon',
        amount:4000,
        date: '20.8.2003'
    }
]


//2.  Create a class called Expense to represent an expense, and use this class to create objects for each expense in the expenses array.

class Expense{
    constructor(id, name, amount,date){
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.date = date;
    }
}
let Expense_Object = new Expense(9, 'suniyo', 5000, '20.7.2020');
// console.log(Expense_Object);

//3.  Define functions addExpense() to add a new expense, updateExpense() to update an existing expense, removeExpense() to remove an expense, and displayExpenses() to display all expenses in the following format: ExpenseName - Amount (Date).

function addExpense(id, name, amount, date){
    expense.push({id, name, amount, date});
    console.log(expense);
}
// addExpense(4,'amit', 3000, '20.09.2023')

// ----------------update-------------------------

function updateExpense(name, changeAmount){
    let i = 0;
    while (i<expense.length){
        if (expense[i].name === name){
            expense[i].amount=changeAmount;
        }
        i+=1
    }
    console.log(expense);
}
// updateExpense('jiyan',50000)

// -----------------------remove-----------------------

function removeExpense(id){
    let i = 0;
    while (i<expense.length){
        if (expense[i].id===id){
            expense.splice(i,2)
        }
        i+=1
    }
    console.log(expense);
}
// removeExpense(2)

// --------------------display--------------------------

function displayExpenses(){
    let i = 0;
    while (i<expense.length){
        console.log(`${expense[i].name} - ${expense[i].amount} ${expense[i].date}`);

        // console.log(expense[i]);
        i+=1
    }
}
displayExpenses()