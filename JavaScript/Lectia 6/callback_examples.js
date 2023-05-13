"use strict"; // is recommended

let age = prompt("What is your age", 18); // cin/sout

if (age < 18) {
    (function welcome() {
        alert("Welcome teenager");
    })();
} else {
    (function welcome() {
        alert("Welcome Mr/Mrs");
    })();
}

// welcome(); // error: welcome is not defined 