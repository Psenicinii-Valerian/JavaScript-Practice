// define 3 variables
let x, y, z;
x = 12;
// console.log("z= ", y+z);

for (z = 0; z<5; z++) {
    console.log(z);
}

console.log("ZZZ ", z);

// for let {} matters, for var - no
{
    var q = "q";
    console.log("q ", q);
}

console.log("q2 ", q); // if it was declared with let, we will have an

const c = "Test"