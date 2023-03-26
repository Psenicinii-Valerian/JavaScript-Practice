let y = 10;
y = -y;
console.log(y);
// modulo operator
console.log(17%3);
// power operator
console.log(2**5);
// power of 27^(1/3)    
console.log(27**(1/3));
// addition (+) operator
console.log("Rita " + "Puma");
console.log(1 + "2");
console.log("1" + 2);

console.log(+true);
console.log(+false);
console.log(+"45");
console.log(+"qaz");
var num = "23";
num = +num;
console.log(num);
// operator precedence JavaScript
let z = 3;
let a, b, c;
a = b = c = 7*4
console.log(a+=2);


if (a || b || c == 28){
    // when at least one of them will be true
    console.log("Hello world");
}

var cd = a || "Test";
if ("Z" > "Zz"){
    console.log("Z is bigger");
} else {
    console.log("Zz is bigger");
}

console.log("2" > 1);
console.log("01" == 1);

let test = 0; // false, null, "";
console.log(Boolean(test));
console.log(null == undefined);
console.log(null === undefined);
console.log("1" == 1);
console.log("1" === 1);
// = - atribuire
// == - egalitate ca valori convertite
// === - ca sa fie egalitate trebuie ca valorile sa fie egale si tipurile sa fie egale
console.log(undefined === 0);
