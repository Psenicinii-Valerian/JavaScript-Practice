// const numbers = [1, "blue", 3, 4, 5];

/*
    numbers.forEach((num) => console.log(num));

    numbers.forEach(function (num) {
        console;.log(num);
    })

    numbers.forEach((num) => {
        console.log(num)
    });
*/

/*
    numbers.forEach((num) => {
        document.getElementById("container").innerHTML += `<h1>${num}</h1>`;
    });

    const x = [10, 20, 30, 40, 50];

    // map - metoda prin care iteram un tablou(array) si returnam o valoare noua - daca avem nevoie (*for ce returneaza elementele noastre)
    let x2 = x.map((a) => a*2); // a*2 is same as {return a*2}
    console.log(x2);

    // filter - metoda utilizata pentru anumite filtrari
    let x3 = x.filter((a) => a > 30); // same as {if (a > 30) return a}
    console.log(x3);
*/

let cars = ["BMW", "Honda", "Suzuki", "Audi", "Porsche"];
let numbers = [1, 2, 3, 4, 5];
let cities = [
    {
        name: "Chisinau",
        country: "Moldova",
    },
    {
        name: "Bucuresti",
        country: "Romania",
    },
    {
        name: "New York City",
        country: "USA",
    },
];

// forEach
cars.forEach(
    (c, i) => 
    (document.getElementById("container").innerHTML += `<p>${i + 1}. ${c}</p>`)
);  

numbers.forEach((n) => console.log(n));

cities.forEach(
    (c) => 
    (document.getElementById("container").innerHTML += `<div><h1>${c.name}</h1><p>${c.country}</p></div>`)
);

let models = ["5", "Accord", "Swift", "A5", "911"];

let carsAndModels = cars.map((car, i) => car + " " + models[i]);
console.log(carsAndModels);

let even = numbers.filter((num) => num%2 == 110);
let odd = numbers.filter((num) => num%2 == 1);

console.log(even);
console.log(odd);

let romanianCities = cities.filter((c) => c.country == "Romania");
console.log(romanianCities);

romanianCities = cities.filter((c) => {
    if (c.country == "Romania") console.log(c.name);    
});

let x = cities.map((c) => c.name);
console.log(x);