showMessage();

function showMessage(){
    console.log("Here is your message");
}

function showMessage(p1, p2){
    console.log("Here is your message 222"); // other code
}


function withLocalVariables(){
    let y = 25;   
    console.log(y);
}

withLocalVariables();
// console.log(y); // y is not defined
showMessage(22, "asd");

let userName = "Nicoly";
function displayMessage(){
    userName = "Bob";
    console.log("Hello " + userName);
}

console.log(userName);
displayMessage();
console.log(userName);

function showName(){
    let userName = "Todd";
    console.log(userName);
}

showName();
console.log(userName);

function displayMark(mark, day = 'today'){
    console.log(day + " we have this mark : " + mark);
}

console.log("##########################")
displayMark();
displayMark(10);
displayMark(9, "yesterday");
displayMark(8, "yesterday", 7);

function smartFunction(name, abc){
    console.log("smart function use ", name);
    if (typeof abc == 'function'){
        abc();
    }
}

smartFunction("Mike", showMessage);
smartFunction("Mike", "showMessage");

let customDisplayMessage = function(){
    console.log("My custom message");
}

customDisplayMessage(); // anonymous function!!!
let yy = customDisplayMessage;
yy();

function sum(a, b){
    return a+b;     
}

sum(7,4);
var numberSum = sum(7,4);
console.log(numberSum);

var z = customDisplayMessage();
console.log(z);

function asd(){
    var t = 24;
    if(t){
        return;
    } else {
        return t;    
    }
}

let test = asd();
console.log(test);