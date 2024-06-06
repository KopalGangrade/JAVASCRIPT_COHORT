// Operations on Fruits:
//1.  Define a variable named fruits and assign it an array containing the names of several fruits (e.g., "apple", "banana", "cherry", "date").
let fruits = [ "apple", "banana", "cherry", "date"];

//2.  Use the forEach method to iterate over the fruits array and log each fruit name capitalized to the console (e.g., "Apple", "Banana", "Cherry", "Date"). Rewrite the callback function passed to the foreach function as an arrow function.
let methodName = fruits.forEach((e)=>{
    // console.log(e);
})

//3.  Use the map method to create a new array called reversedFruits that contains each fruit name reversed (e.g., "elppa"). Log the reversedFruits array to the console. Rewrite the callback function passed to the map function as an arrow function.

// let reversedFruits = fruits.map((e)=>{
//     e.split('').reverse().join('') 
// })
// console.log(reversedFruits)

//4.  Use the filter method to create a new array called longFruits that contains only the fruit names that have more than 5 characters. Log the longFruits array to the console. Rewrite the callback function passed to the filter function as an arrow function.

// let longFruits = fruits.filter((f) => f.length===5);
// {
//     console.log(longFruits);
// };

//5.  Use filter to find fruits that contain the letter 'a', and then map to return these fruits in uppercase. Store the result in an array called aFruitsUpper and log it to the console.
// let aFruitsUpper = fruits.filter((find)=>find.includes('a'))
// .map((find)=>find.toUpperCase());
// console.log(aFruitsUpper)



//6.  Initialize a variable totalCharacters to 0. Use forEach to add up the number of characters in each fruit name and update totalCharacters. Log totalCharacters after the loop.
let totalCharacters = 0;
totalCharacters.forEach(()=>{
    
})


function callback(e){
    return(e);
}

function add(num, callback){
    console.log(callback);
}
add(3, callback);

function add(num, num1){
    return(num+num1);
}

// Define an asynchronous function with a callback

// function minus(num, num1, add){
//     return add(num, num1); // Call the 'add' callback with 'num' and 'num1'
// }

// let result = minus(2, 4, add); // Call 'minus' with arguments and assign the result to 'result'
// console.log(result); // Output: 6
