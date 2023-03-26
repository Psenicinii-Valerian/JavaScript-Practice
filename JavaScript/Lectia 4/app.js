/*
function simpleFunction(){
    let message = "Some text";
    console.log("simpleFunction()");
}

simpleFunction();

// console.log(message); error: ReferencialError: message is not defined

let myVariableFunction = function simpleFunction2(){
    console.log("myVariableFunction()");
}

myVariableFunction();

function greeting() {
    let message = "Welcome";
    let sayHi = function hi() {
        // let message = "Fresh";
        message = "Fresh";
        console.log(message);
    }
    sayHi();
    console.log(message);
}

greeting();
// console.log(message); // error because message on line 32 is declared as let. To fix we should remove the let keyword

function simpleFunction3() {
    let i = 0;
    while (i < 3) {
        var message = "Some text";
        i++;
    }
    console.log("Using let", message); // if on line 32 was 'let message', an error would occur here
    console.log("simpleFunction3()");
}

simpleFunction3();
// console.log(message); // error because message on line 32 is declared as var. To fix we should remove the var keyword

// IIFE
(function simpleFunctionIIFE(){
    let message = "Some text";
    console.log("simpleFunctionIIFE()");
})();

// var - when a variable is declared block scope is function; if function doesn't exist - it is global.
// let - when variable is declared, block scope is {}; if {} doesn't exist - it is function;  if function doesn't exist - it is global.
// if inside a function we use a variable without let or var it means that is a global variable. Don't do if is not needed.
// *block scope - domeniul de vizibilitate

// Create a function figureArea, that wiil recieve the name of figure and needed dimensions.
// Return the area of the figure (minimum 4 figures)
function figureArea(figureName, dimension1, dimension2) {
    switch(figureName) {
        case "patrat" : return dimension1**2;
        case "dreptunghi" : return dimension1 * dimension2;
        case "triunghi" : return Math.round(((dimension1 * dimension2) / 2), 2);
        case "circle" : return Math.round((Math.PI * (dimension1**2)), 2)
    }
}

calculatedArea = figureArea("circle", 4);
console.log("Returned area = ", calculatedArea);
*/

// IIFE
(function simpleFunctionIIFE(){
    let message = "Some text";
    console.log("simpleFunctionIIFE()");
})();

// Closures 
// Closures - allow us to access internal resource of a function without global scope
let greeting = (function () {
    var message = "Welcome";
    let getMessage = function() {
        return message;
    }
    return {
        getMessageReturn : getMessage // key = value (key = getMessageReturn, value = getMessage)
    }
})();

console.log(greeting.getMessageReturn());
// sau console.log(greeting.getMessageReturn); daca avem pe randul 84 getMessageReturn : getMessage()

function setupCounter(val) {
    return function counter(){
        return val++;
    }
}

// console.log(val); Error: valoarea parametrului local al functiei nu poate fi utilizata in afara acesteia
let counter1 = setupCounter(0);

console.log(counter1());
console.log(counter1());

let counter2 = setupCounter(10);
console.log(counter2());
console.log(counter2());

function simple(){
    let a = 5;
    return a*a;
}

console.log(simple());

// let x = 10;

// function simple2(){
//     return x*x;
// }

// console.log(simple2());

// function add(){
//     x+=1;
// }

// add();
// add();
// add();
// console.log(x);

// // function add(){
// //    let x = 10;
// //    x+=1;
// //    return x;
// // }

// // console.log(add());
// // console.log(add());
// // console.log(add());

// nested functions using private variables
function add(){
    let counter = 0;
    function plus(){
        counter++;
    }
    plus();
    return counter;
}

console.log(add());
console.log(add());

// create a counter with saving state without global variables
const adder = (function() {
    let counter = 90;
    return function(){
        counter++;
        return counter;
    }
})();

console.log(adder());
console.log(adder());

// Arrow functions

// let greetingFunction = function(){
//     return "Welcome to JS world";
// }

// let message = greetingFunction();
// console.log(message);

let greetingFunction = () => "Welcome to JS world";

let message = greetingFunction();
console.log(message);

let greetingWithMike = (name) => "Hello " + name;
console.log(greetingWithMike("Nike"));

let max = (x,y,z) => {
    if (x > y) {
        if (x > z) return x;
    } else {
        if (y > z) {
            return y;
        }       
    }
    return z;
} 

console.log(max(54,16,73));