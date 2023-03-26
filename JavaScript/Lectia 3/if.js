var year = new Date().getFullYear();
console.log(year);
if(year == 2023){
    console.log("This is the right year");
}else{
    console.log("Try again, you didn't guess");
}

let salary = 180000*12;

if(salary > 10**6){
    console.log("Congrats, you are millionaire");
}else if(salary < 0.9*10**6){
    console.log("You have an average salary");
}else{
    console.log("Increase your salary");
}

let age = 17;
let result = (age > 17) ? "Adult" : "Teenager";
console.log(result);

age = 5;
result = (age < 3) ? "Hi baby" : 
                    (age < 18) ? "Hello" :
                        (age < 100) ? "Greetings Mr...." : "You are human?";

console.log(result);

result = ("0") ? "Da" : "Nu";
console.log(result);
console.log(null ||  3 || undefined);

// console.log(alert(1) ||  3 || alert(3)); 
// alert(1 && null && 2); 
// console.log(alert(1) && alert(3)); 
// alert(null || 3 && 4 || 5);

let y;
console.log(typeof y);
a = 5;
// result = (a != null && a != undefined) ? a : 10;
result = a ?? 10;
console.log(result);

let x = (1 && 2) ?? 3;
console.log(x);

