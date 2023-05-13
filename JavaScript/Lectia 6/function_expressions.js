// greeting(); // error: cannot be used before declaration
// Function Declaration - it always contains a name and word function before name
function sayHi(){
    console.log("Welcome");
}

// Function Expression - it doesn't contain a name before (), tipically it is a variable = expression/function
let greeting = function(){
    console.log("Greeting");
}

function multiply(x){
    return 2*x;
}

sayHi(); // call the function
greeting();

console.log(sayHi()); // call the function
console.log(greeting);

// wrapper or alias
let func = sayHi;
func();

func = greeting;
func();

func = sayHi();
console.log(func);
console.log(multiply(5));