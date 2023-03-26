// console.log(x);
console.log(y);

let i = 5;

while(i > 0){
    console.log(i);

    i--;
}

do{
    console.log(i);
    i++;
}while(i < 3)

let j = 5;
for (; j < 8; j++){
    console.log(j*2);
}

for(i = 0; i < 10; i++) {
    if(i%2 != 0) {
        // cifre impare
    }
}

let x = 7;
var y = 8;

let color = 'green';

switch (color) {
    case 'white':
        console.log("It was white");
        break;
    case 'red':
        console.log("It was red");
        break;
    case 'green':
        console.log("It was green");
        break;
    default:
        console.log("Unknown color");
        break;
}