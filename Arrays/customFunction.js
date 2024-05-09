// Custom Functions:

// 1. ForEach: Write a function called forEachArray that takes an array and a callback function as arguments. The forEachArray function should apply the callback function to each element of the array but does not return anything. Note: You cannot use the inbuilt forEach function.

function forEachArray(array, callback) {

}

// 2. 



let mapCallback = (e)=>{
    return e;
}

function mapArray(array, callback) {
    return callback(array);
}
let result = mapArray([1,2,4,5,6], mapCallback);
console.log(result);



// 3. Filter: Write a function called filterArray that takes an array and a callback function as arguments. The filterArray function should apply the callback function to each element of the array and return a new array containing only the elements for which the callback function returns true. Note: You cannot use the inbuilt filter function.
function filterArray(array, callback) {}


function filterArray(arr, callback) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  }
  
  // Example usage:
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  function isEven(num) {
    return num % 2 === 0;
  }
  
  const filteredResult = filterArray(arr, isEven);
  console.log(filteredResult); // Output: [2, 4, 6, 8, 10]
  
