// Manipulating Temperatures
//1.  Define a variable named temperatures and assign it an array containing several temperature readings in Celsius (e.g., -3, 14, 22, 5, -10).

let temperatures = [-3, 14, 22, 5, -10];



//2.  Use the forEach method to iterate over the temperatures array and log each temperature to the console. Rewrite the callback function passed to the foreach function as an arrow function.

// let temp = temperatures.forEach((e)=> console.log(e));
let callback = (e)=> console.log(e);

function temp(callback){
    return callback;
}
temp();

//3.  Use the forEach method to iterate over the temperatures array and convert each temperature to Fahrenheit using the formula (temperature * 9/5) + 32. Log each converted temperature to the console. Rewrite the callback function passed to the foreach function as an arrow function.


//4.  Use the map method to create a new array called temperaturesInFahrenheit that contains the Fahrenheit equivalent of each temperature in the temperatures array. Log the temperaturesInFahrenheit array to the console. Rewrite the callback function passed to the map function as an arrow function.


//5.  Use the filter method to create a new array called belowFreezing that contains only the temperatures from the temperatures array that are below 0°C. Log the belowFreezing array to the console. Rewrite the callback function passed to the filter function as an arrow function.
