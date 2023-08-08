let plates = ["STP 1", "ION 777", "BSC 182", "LOL 1", "BUM 222"];

const type = document.getElementById("type");
const letters = document.getElementById("letters");
const numbers = document.getElementById("numbers");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

letters.addEventListener("keyup", () => {
    if (letters.value.length > 3) {
        letters.value = letters.value.substring(0, 3);
    }
    
    let inputValue = letters.value;
    let newInput = inputValue.replace(/[^a-zA-Z]/g, "");
    letters.value = newInput
});

numbers.addEventListener("keyup", () => {
    if (numbers.value.length > 3) {
        numbers.value = numbers.value.substring(0, 3);
    }
    
    let inputValue = numbers.value;
    let newInput = inputValue.replace(/[^0-9]/g, "");
    numbers.value = newInput
});

btn.addEventListener("click", (e) => {
    e.preventDefault(); 
    
    if (letters.value.length === 3 && numbers.value.length >=1) {
        let numberPlate = (letters.value + " " + numbers.value).toUpperCase();

        if (plates.includes(numberPlate)) {
            result.innerHTML = `Numarul: ${numberPlate} este ocupat!`;
        } else {
            result.innerHTML = `Pret: ${calcPrice(numberPlate)} MDL`;
        }
    }
})

/*
    1. Daca toate cifrele difera si literele la fel - 2500 lei
    2. Daca sunt macar doua litere la fel si 2 cifre la fel - 5000 lei
    3. 3 litere la fel, 3 cifre la fel - 20000 lei
    4. 3 litere diferite, 3 cifre la fel - 15000 lei
    5. 3 cifre la fel, 3 litere diferite - 15000 lei
    6. 3 litere si 2 cifre - 12500 lei
    7. 3 litere si o cifra - 22500 lei
    8. 3 litere la fel si 2 cifre - 17500 lei
    9. 3 litere la fel si o cifra - 27500 lei
*/

function calcPrice(plate) {
    let ls = plate.split(" ")[0];
    let ns = plate.split(" ")[1];

    let lsCount = 0;
    for (let i=0; i<ls.length; i++){
        if (countReps(ls, ls[i]) > lsCount) {
            lsCount = countReps(ls, ls[i]);
        }
    }

    let nsCount = 0;
    for (let i=0; i<ns.length; i++){
        if (countReps(ns, ns[i]) > nsCount) {
            nsCount = countReps(ns, ns[i]);
        }
    }

    console.log(lsCount, nsCount);

    // lsCount - numarul de litere egale (1 - nici o litera egala)
    // nsCount - numarul de cifre egale (1 - nici o cifra egala)
    // ns.length - numarul de cifre
    // == - egal doar valoare, === - egal valoare si tip

    if (lsCount === 3 && nsCount === 3) {
        return 20000;
    } else if (lsCount === 3 && nsCount === 2) {
        return 15000;
    } else if (lsCount === 2 && ns.length === 2) {
        return 10000;
    } else if (lsCount === 1 && ns.length === 2) {
        return 12500;
    } else if (lsCount === 1 && ns.length === 1) {
        return 22500;
    } else if (lsCount === 3 && ns.length === 2) {
        return 17500;
    } else if (lsCount === 3 && ns.length === 1) {
        return 27500;
    } else if (lsCount === 2 && ns.length === 1) {
        return 25000;
    } else if (lsCount === 1 && nsCount === 1) {
        return 2500;
    } else if (lsCount === 2 && nsCount === 2) {
        return 5000;
    } else if ((lsCount === 1 && nsCount === 3) || (lsCount === 3 && nsCount === 1)) {
        return 15000;
    } else {
        return 5000;
    }
}

function countReps(str, letter) {
    let count = 0;
    for (let i=0; i < str.length; i++) {
        if (str[i] === letter) count++;
    }
    return count;
}