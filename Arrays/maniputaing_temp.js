// Manipulating Temperatures
//1.  Define a variable named temperatures and assign it an array containing several temperature readings in Celsius (e.g., -3, 14, 22, 5, -10).

let temperatures = [-3, 14, 22, 5, -10];



//2.  Use the forEach method to iterate over the temperatures array and log each temperature to the console. Rewrite the callback function passed to the foreach function as an arrow function.

let temp = temperatures.forEach(function (e){
    console.log(e)
});

let temp1 = temperatures.forEach((e)=> console.log(e));



//3.  Use the forEach method to iterate over the temperatures array and convert each temperature to Fahrenheit using the formula (temperature * 9/5) + 32. Log each converted temperature to the console. Rewrite the callback function passed to the foreach function as an arrow function.

convert_Temp = temperatures.forEach(function (e){
    console.log((e*9/5)+32);
})

convert_Temp = temperatures.forEach((e)=>{
    console.log((e*9/5)+32);
})


//4.  Use the map method to create a new array called temperaturesInFahrenheit that contains the Fahrenheit equivalent of each temperature in the temperatures array. Log the temperaturesInFahrenheit array to the console. Rewrite the callback function passed to the map function as an arrow function.

temperaturesInFahrenheit = temperatures.map(function (e){
    // console.log((e*9/5)+32);
})

temperaturesInFahrenheit = temperatures.map((e)=>{
    // console.log((e*9/5)+32);
})


//5.  Use the filter method to create a new array called belowFreezing that contains only the temperatures from the temperatures array that are below 0°C. Log the belowFreezing array to the console. Rewrite the callback function passed to the filter function as an arrow function.


belowFreezing = temperatures.filter(function(e) {
    return (e < 0);
});
console.log(belowFreezing);


// belowFreezing = temperatures.filter((e)=> (e < 0));
// console.log(belowFreezing);