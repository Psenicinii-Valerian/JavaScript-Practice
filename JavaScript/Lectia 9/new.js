// new operator is used at constructor functions and helps to create objects
// Convention: constructor functions start with a capital letter

function User(name) {
    if (!new.target){
        return new User(name);
    }
    this.name = name;
    this.isAdmin = false;
    this.hasMillionRoses = false;
}

let user = new User("Jack");

// check properties
console.log(user.name);
console.log(user.isAdmin);

// what compiler does on line 5-9
/*
    function User(name) {
        this = {};
        this.name = name;
        // other code
        return this;
    }
*/

// line 5-9 is equivalent to
/* 
    let user = {
        name: "Jack",
        isAdmin: false
    }
*/

console.log(User());
console.log(new User);
console.log(new User());

// we can have methods in constructor function
function Student(name){
    this.name = name;

    this.address = {
        country: {
            country: "Moldova",
            code: "+373"
        },
        city: "Chisinau"
    },
    

    this.getMark = function(){
        console.log("I'm an A+ student");
    }
}

let john = new Student("John");
john.getMark();

// equivalent of line 46
/*
    john = {
        name: "John",
        getMark = function() {...}
    }
*/

// get country code from student
console.log(john.address.country.code);

john.address.country = null;
// console.log(john.address.country.code); // error: could not access code from null property
console.log(john.address.country && john.address.country.code);
console.log(john.address.country?.code);

console.clear();

// Symbol - type in JS that typically is a string or symbol(char), and represents a unique identifier
// 2 symbols will never be equal, even if they have the same value 
let id = Symbol();
console.log(id);
id = Symbol("id");
console.log(id);

let id2 = Symbol("id");

console.log(id == id2);
console.log(id.toString());
console.log(id.description);

user = {
    name: "Tester",
    [id]: 25
}; 

console.log(user);

id = Symbol("id");
user[id] = 25;
console.log(user[id]);

console.log(user);