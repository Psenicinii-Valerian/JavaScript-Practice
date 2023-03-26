// to display message in browser console (cout, Console.WriteLine)
// document.write(100*3);
console.log("Hello Js module");

// to display message in browser console (cout, Console.WriteLine), but in red color (as an error)
console.error("My custom error");

// functie pentru ca elementele de pe pagina pentru a gasi elementul cu id-ul specificat
// function that makes 
// add content to node/tag in a page
document.getElementById("demo").innerHTML = "My first message from JavaScript";

// add style to a node/tag
// document.getElementById("demo").style.display = "none";
document.getElementById("demo").style.fontSize = "24px";

// creating a variable and define a value
var elements = document.getElementsByClassName("myClass");
console.log("elements ", elements);

// define a function
function myFunction() {
    document.getElementById("myParagraph").innerHTML = "<h1>Text</h1> was changed by our Function"; 
    // document.write(100*3);  use only for testing purpose      
}

// define an alert
// alert("My custom message 2");

// innerHTML - allows us to give HTML tags/nodes as value for an element/variable
// innerText - ne permite sa scriem doar un text ca valoare unui element/variabile 

// call the function
// myFunction();