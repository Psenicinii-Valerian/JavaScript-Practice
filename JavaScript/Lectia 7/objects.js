// WORKING with OBJECTS
let user = new Object();
let compactUser = {};

console.log(typeof(user));
console.log(typeof(compactUser));

// define a real object with properties
let person = {
    name: "Boris",
    age: 23,
    role: "QA",
    isAdmin: false
}

console.log(person);
person.name = "Andrew"; // set the value in a property of object
console.log(person.name); // read a property from object and display to console
console.log(JSON.stringify(person, null, 4)); // display the object in console in a better way;

// create/add a property in object
person.names = "Valera";
console.log(person);

// delete property from object
delete person.names;
console.log(JSON.stringify(person, null, 4));