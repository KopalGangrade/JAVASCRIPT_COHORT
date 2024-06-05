// Calculate Age:

//1.  Define an array called people containing several objects, each representing a person. Each object should have properties such as name, and age.

let people = [
    {
        name: 'Jiya',
        age: 23
    },
    {
        name:'kopal',
        age: 24
    },
    {
        name:'sita',
        age: 25
    },
    {
        name: 'jian',
        age: 26
    }
]


//2.  Define a function called calculateAverageAge() that takes the people array as input and returns the average age of all the people in the array.


// function calculateAverageAge(people){
//     let average = 0;
//     for (let person of people){
//         average += person.age;
//     }
//     return average / people.length;
// }
// let result = calculateAverageAge(people);
// console.log(result);


function calculateAverageAge(people){
    let avg = 0;
    let i = 0;
    while (i<people.length){
        avg+=people[i].age;
        i+=1
    }
    return avg / people.length;
}
let result = calculateAverageAge(people);
console.log(result);






//3.  Call the calculateAverageAge() function with the people array as an argument and log the result to the console.

// function calculateAverageAge(people) {
//     console.log(people);
// }
// calculateAverageAge(people);
