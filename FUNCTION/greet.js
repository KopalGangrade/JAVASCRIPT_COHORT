// Greet function:


//a. Define a function called greet that takes a name as an argument and returns a greeting message. For example, if the name is "Alice", the function should return "Hello, Alice!".


function greet(name){
    return (`Hello ${name}`);
}
let result = greet("riya");
console.log(result);

//b. Call the greet function you defined in the previous task with your name as the argument and log the result to the console.

function greet(name){
    console.log(`Hello ${name}`);
}
greet("kopal");

//c. Modify the greet function to have a default argument of "Guest" for the name parameter. This means that if no name is provided, the function should return "Hello, Guest!".

function greet(name="guest"){
    console.log(`Hello ${name}`);
}
greet()

//d. Rewrite the greet function as a function expression and store it in a variable called greetFunction.

let greetFunction1 = function(name){
    return(`hello ${name}`);
}
console.log(greetFunction1("sita"));

//e. Rewrite the greet function as an arrow function.

let greetFunction = (name)=>{
    console.log(`Hello ${name}`);
}
greetFunction("dimpi")
