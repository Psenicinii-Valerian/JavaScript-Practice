// // fetch(url) - facem apelul datelor din API | fetch - a colecta 
// fetch("https://rickandmortyapi.com/api/character")
// // primim raspuns - res pe care il transformam in json
//  .then(res => res.json())
// // primi json-ul in parametrul data si il afisam
//  .then(data => console.log(data.results))
//  .catch(error => console.log("Something went wrong"));

// O metoda mai practica:
async function getAPI(link){
    try{
        const res = await fetch(link);
        const data = await res.json();
        data.results.forEach(ch => {
            // innerHTML - functie prin care putem introduce valori in interiorul unui element HTML (div/id)
            document.getElementById("characters").innerHTML += `
                <div>
                    <img src=${ch.image} alt=${ch.name}>
                    <h1>${ch.name}</h1>
                    <p>${ch.status !== "unknown" ? ch.status : "We don't know if he's alive"}</p>
                    <p>${ch.species !== "unknown" ? ch.species: "We don't know if his species"}</p>
                    <p>${ch.origin.name !== "unknown" ? ch.origin.name : "From Chisinau, Moldova"}</p>
                </div>
            `;
        });
    }
    catch (err) {
        console.error(err);
    }
}

getAPI("https://rickandmortyapi.com/api/character");
// diferenta: sintaxa