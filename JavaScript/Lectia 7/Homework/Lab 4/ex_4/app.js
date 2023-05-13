confirm("In this program you can calculate the area of a rectangle/square");
let length = prompt("Enter the length:");
let width = prompt("Enter the width (optional):");

function calculateArea(length, width) {
    if (width === null) {
      return length * length; // calculate square area
    } else {
      return length * width; // calculate rectangle area
    }
}

if (width === "") {
  width = null;
}
  
let area = calculateArea(length, width);
  
alert(`The area of the given figure is ${area} (square units)`);