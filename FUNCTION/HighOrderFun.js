//3.  Higher Order and Callback functions:

// -----------------------------------------------------------------------------------------------------
//a.  Define a function called higherOrderFunction that takes two parameters: num and callback. Inside higherOrderFunction, call the callback function and pass num as an argument.

function higherOrderFunction(num, callback) {
    return callback(num);
}

// -----------------------------------------------------------------------------------------------------
//b.  Define a function called callbackFunction that takes a number as an argument and logs it to the console. Call higherOrderFunction with a number and pass callbackFunction as the callback.

function callbackFunction(number){
    console.log(number);
}
higherOrderFunction(5, callbackFunction)

// --------------------------------------------------------------------------------------------------------

//c.  Modify the call to higherOrderFunction, to pass a number and the same callback but as a function expression.

function higherOrderFunction(num, callback){
    callback(num);
}
higherOrderFunction(5 , function(number){console.log(number)});

// --------------------------------------------------------------------------------------------------

//d.  In the call to higherOrderFunction, modify the callback function expression. The new function expression should log the square of the number to the console.

function higherOrderFunction(num, callback){
    callback(num);
}

function callbackFunction(number){
    console.log(number*number);
}
higherOrderFunction(3,callbackFunction)



//-----------------------------------------------------------------------------------------------------

//e.  In the call to higherOrderFunction, modify the callback function expression that takes two parameters, num1 and num2, and log their sum to the console. Make the necessary changes to higherOrderFunction to call the callback accordingly.

function higherOrderFunction(num1,num2, callback){
    callback(num1, num2);
}

function callbackFunction(num1, num2){
    console.log(num1+ num2);
}
higherOrderFunction(3,5,callbackFunction)

