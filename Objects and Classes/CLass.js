// Class:
//1. Create a new object named friend with similar properties to the student object, but with values representing a friend's name, email, age, and address. Log the friend object to the console.

//2. Create a new object named topper with similar properties to the student object, but with values representing an topper’s name, email, age, and address. Log the friend object to the console.

// let friend = {
//     name:'kopal',
//     email:'kopal@gmail.com',
//     age:23,
//     address: '123 main street pune',
//     topper:{
//         name:'siya',
        
//         email:'siya@gmail.com',
//         age:24,
//         address: '123 main street delhi'
//     }
// };
// console.log(friend);

// ---------------------------------------------------------------------------------------------------

//3. Define a class called Student that takes parameters for name, email, age, country, city, and pin_code. Inside the class, set these parameters as properties of the new object. Make sure to add the greet method inside the class.

// 4. Add a method called getFullAddress to the Student class that returns the full address of the student in this format (India, Bangalore - 560038).


//5. Create objects of the Student class for yourself, your friend, and another student. Log these objects to the console to see the created objects. 
//6. Call the greet and getFullAddress methods on one of the Student objects and log the result to the console.



class student {
    constructor(name, email, age, country, city, pin_code) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.country = country;
        this.city = city;
        this.pin_code = pin_code;  
    }
    greet() {
        return(`Hello, my name is ${this.name}.`);
    }
    getFullAddress(){
        return(`${this.country}, ${this.city} - ${this.pin_code} `)
    }
}
let result = new student("diya","diya@gmail.com", "23", "India", "pune", "345667");
console.log(result);
console.log(result.getFullAddress());
console.log(result.greet());


