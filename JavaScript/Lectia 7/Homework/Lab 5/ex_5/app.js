const num = parseInt(prompt("Enter a number:"));

function getMultiples(num, factor = 2) {
  if (num === 1) {
    return "1";
  }
  if (num % factor === 0) {
    return factor + " * " + getMultiples(num / factor, factor);
  }
  return getMultiples(num, factor + 1);
}

const factors = getMultiples(num);
alert(`The multipliers of ${num} are: ${factors}`);