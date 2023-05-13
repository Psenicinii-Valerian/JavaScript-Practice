/*
    let user = {
        name: "Sorina",
        age: 17,
        "she likes": ["books", "ice-cream", "games", "music"], // if propriety of object contains spaces, it must be quoted
        sport: true,
    };

    // console.log(user."she likes"); // syntax error
    // console.log(user"she likes"); // syntax error
    // console.log(user[she likes]); // syntax error
    console.log(user["she likes"]);

    console.log(user.sport);

    // user.she likes = "apple"; // syntax error
    user.sport = "tennis";
    console.log(user.sport);

    let user1 = {}
    user1.age = 22;
    // set 
    user["can swim"] = true;
    // get
    console.log(user["can swim"]);
    // delete 
    delete user["can swim"];

    let myProp = "age";
    console.log(user1[myProp]);
*/

/*
// define computed property 
// Computed property - is a property that is an expression that is calculated before it's used/ assigned
// let fruit = "grapes";
// let bag = {
//     [fruit]: 10
// };

// console.log(bag.grapes);

let fruit = "grapes";
let bag = {
    [fruit + 'Notebooks']: 20
}

let person = {
    firstName: "Ion",
    lastName: "Druta",
    ["full " + "Name"]: "Ion Druta" // if property/computed property contains spaces use [] to access/set value
}

// console.log(person.fullName);
console.log(person["full Name"])
*/

/*
function makeUsers(name, age){
    return{
        // name: name,
        // age: age
        name, 
        age
    }
}

let user2 = makeUsers("Andrei", 19);
console.log(user2.age);

let superUser = makeUsers("Sergiu", user2);
console.log(superUser.age.name);

// don't use reserved words from JavaScript as properties for object
// let obj = {
//     for: 1,
//     let: 2, 
//     return: 3
// };

// console.log(obj.for + obj.let + obj.return);

let obj = {
    0: "Abracadabra",
    25: true
};

// console.log(obj.0); // syntax error
console.log(obj[0]);
console.log(obj["0"]);
console.log(obj[25]);
console.log(obj["25"]);
*/

/*
// __proto__ property - property in each JavaScript object that save the parent type property 
//                      and if is null than it means it's the last type/class (it doesn't inherit from any other class)
console.log(obj.__proto__); // [Object: null prototype] {}

obj.__proto__ = "Development";
console.log(obj.__proto__); // [Object: null prototype] {}

obj.freshProp = "I exist";
console.log(obj.freshProp);

// how to check if property exist
console.log(obj.myProperty === undefined); // if it's true it means that such propriety doesn't exist
console.log(obj.freshProp=== undefined); // if it's false it means that such propriety exists

// we can use in operator to check if property exist in object
console.log("myProperty" in obj) // if it's false it means that such propriety doesn't exist
console.log("freshProp" in obj) // if it's true it means that such propriety exists

let usr = { age: 24};
let key = "age";
console.log(key in usr);

console.log("-----------------");
*/

let customer = {
    balance: undefined
}

console.log(customer.balance);
console.log("balance" in customer);

// for in loop
customer = {
    name: "Gjergj",
    age: 25,
    salary: 5000
}

for (let key in customer){
    console.log(key, customer[key]);
}

let httpCodes = {
    "500": "Server error",
    "404": "Not found",
    "402": "User error",
    "301": "Redirect",
    "202": "Resource was created",
    "201": "All good",
}

for (let code in httpCodes){
    console.log(code); // show keys
    console.log(httpCodes[code]); // show values
}