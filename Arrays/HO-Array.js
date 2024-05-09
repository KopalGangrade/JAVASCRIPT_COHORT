// Higher Order Array methods - Foreach, Map, Filter:

//1.  Define a variable named numbers and assign it an array containing some numbers (e.g., 1, 2, 3, 4, 5).

let numbers = [1, 2, 3, 4, 5];

//2.  Use the forEach method to iterate over the numbers array and log each number to the console.

let result = numbers.forEach((e)=>{
    console.log (e);
})


//3.  Use the forEach method to iterate over the numbers array and log each number multiplied by 2 to the console.
let result1 = numbers.forEach((e)=>{
    console.log (e*2);
})

//4.  Use the map method to create a new array called squaredNumbers that contains the square of each number in the numbers array. Log the squaredNumbers array to the console.
let squaredNumbers = numbers.map((num)=>{
    return num*num;
})
console.log(squaredNumbers);

//5.  Rewrite the callback function passed to the map function as an arrow function.
let callback = (s)=>{
    console.log(s);
}
//6.  Use the filter method to create a new array called evenNumbers that contains only the even numbers from the numbers array. Log the evenNumbers array to the console.

let evenNumbers1 = numbers.filter((num)=>{
    if (num%2==0){
        return num;
    }
});
console.log(evenNumbers1);

//7.  Rewrite the callback function passed to the filter function as an arrow function.

let callback1 = (num)=>{
    if (num%2===0){
        return num;
    }
}

let evenNumbers = numbers.filter(callback1);
console.log(evenNumbers);

