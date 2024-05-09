// Array as an Object:

let colors = ["red", "green", "blue"];

//1.  Use the typeof operator to check the type of colors array and console it.
console.log(typeof colors);

//2.  Log the length property of the colors array to the console to see the number of elements in the array.
console.log(colors.length);

//3.  Use the push method to add another color to the end of the colors array.
colors.push("blue")
console.log(colors);

//4.  Use the pop method to remove the last color from the colors array.
colors.pop()
console.log(colors);

//5.  Use the indexOf method to find the index of a specific color (e.g., "blue") in the colors array.
let length = colors.indexOf("red");
console.log(length);

//6.  Add a property to the colors array called owner and set its value to your name. Log the colors array to see if the owner property is added.
let add_property = {owner:"kopal"};
colors.push(add_property);
console.log(colors);

//7.  Use a for...in loop to iterate over the properties of the colors array and log each property name and the associated value to the console.
// let j;
for (let j in colors){
    console.log(j);
}





