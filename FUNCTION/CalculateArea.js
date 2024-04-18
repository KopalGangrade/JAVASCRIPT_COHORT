//2. Calculate Area:

//a.  Define a function called calculateArea that takes two parameters, width and height, and returns the area of a rectangle (width * height).

function calculateArea(width, height) {
    return (width * height);
}
let result = calculateArea(3,5);
console.log(result);

//b.  Call the calculateArea function with width = 5 and height = 10, and log the result to the console.

function calculateArea(width, height) {
    console.log(width * height);
}
calculateArea(3,5);


//c.  Modify the calculateArea function to have a default value of 1 for both width and height. This means that if no arguments are provided, the function should return 1.

function calculateArea(width=1, height=1) {
    console.log(width * height);
}
calculateArea();

//d.  Rewrite the calculateArea function as a function expression and store it in a variable called calculateAreaFunction.

let calculateAreaFunction=function (width, height) {
    console.log(width * height);
}
calculateAreaFunction(1,3);

//e.  Rewrite the calculateArea function as an arrow function.

let calculateAreaFunction1 = (width, height)=> {
    console.log(width * height);
}
calculateAreaFunction(1,3);