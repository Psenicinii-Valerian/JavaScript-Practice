const age = prompt("Enter your age:");
let ageCategory = "not defined";

if (age >= 0 && age < 12) {
    ageCategory = "child";
} else if (age >= 12 && age < 18) {
    ageCategory = "teenager";
} else if (age >= 18 && age < 60) {
    ageCategory = "adult";
} else if (age >= 60){
    ageCategory = "retiree";
}

alert(`By the age you gave, we can say you are ${ageCategory}!`);