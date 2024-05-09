// Loops for Arrays:
//1.  Use a for loop to iterate over the colors array and log each color to the console.
//2.  Use a while loop to iterate over the colors array and log each color to the console.
//3.  Use a for...of loop to iterate over the colors array and log each color to the console.

let colors = ["red", "green", "blue"];

// -------for loop --------
for (let i=0; i<colors.length; i++) {
    console.log(colors[i]);
}


// --------while loop --------

let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

// ----------for of --------

for (i of colors){
    console.log(i);
}
