// variables with types

let message = "Say hi";
message = 147852;

console.log(message);
let n = 789;
n = 74.14;
// alert(1/0); // Infinity
console.log(-5/0); // -Infinity

console.log("Lesson " / 2); // NaN

console.log(NaN + 1);
console.log(typeof(NaN));
console.log(231231441252153124n);
console.log(typeof(233132142141241221n)); // works everywhere except IE(Internet Explorer)

function callMe(){
    return "I was called";
}
// strings
let username = "John"
console.log(username[1]);
console.log("Marta and " + username + " are walking in the park");
console.log(`Marta and ${username} are walking in the park`);
console.log(`Marta and ${25*3} are walking in the park`);
console.log(`Marta and ${callMe()} are walking in the park`);

username = null;
console.log(username + " text");

// boolean
var nameIsVerified = false;
console.log(nameIsVerified);
console.log(5>2);

// undefined
let age;
age = undefined;
console.log(age);

console.log("Typeof operator ##################");
console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof 25n);
console.log(typeof "abv");
console.log(typeof Symbol('id'));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof alert);
console.log(typeof [1,2,3]);