const circleLength = parseInt(prompt("Enter the length of the circle:"));
const squarePerimeter = parseInt(prompt("Enter the perimeter of the square:"));

if (isNaN(circleLength) || isNaN(squarePerimeter)) {
  alert("Invalid input. Please enter valid numbers");
} else {
  const circleDiameter = circleLength / Math.PI;
  const squareSide = squarePerimeter / 4;

  if (circleDiameter <= squareSide) {
    alert("The circle can fit inside the square");
  } else {
    alert("The circle cannot fit inside the square");
  }
}