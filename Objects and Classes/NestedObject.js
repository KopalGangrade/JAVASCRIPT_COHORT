// Nested Object:
//1. Create a new object inside the student object called address. Add properties to the address object for country, city, and pin_code. Set their values to your address details.
//2. Log the country property of the address object to the console.
//3. Update the pin_code property of the address object to a new pin code. Log the address object to the console to see the updated pin_code property.

let student = {
    name:'kopal',
    email:'kopal@gmail.com',
    age:23,
    address:{
        country:'india',
        city:'pune',
        pin_code:'123'
    }
};
student.address.pin_code = "471047"
console.log(student.address.country);
console.log(student.address.pin_code);