// Basic Objects:
//1.  Define a variable named student and assign it an empty object.
//2. Add properties to the student object for name, email, and age. Set their values to your own name, email, and age.
//3. Log the name property of the student object to the console.
//4. Update the age property of the student object to some random value, say 10. Log the age property of the student object to the console to see the updated property.
//5. Add a method called greet to the student object that logs a greeting message using the name property. Call the greet method to see the greeting message.

let student = {
    name:'kopal',
    email:'kopal@gmail.com',
    age:23,
    greeting:function greet(){
        console.log(`Hello ${student.name}`);
    }
};
student.age = 10;
console.log(student);
console.log(student.age);
student.greeting();
