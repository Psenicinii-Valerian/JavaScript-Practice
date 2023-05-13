const hexCombinations = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const btnRemove = document.getElementById('btnRemove');
const colorText = document.querySelector('.color');

btn.addEventListener("click", myFunction);

btnRemove.addEventListener("click", function(){
    // remove event listner from the button with id btn
    btn.removeEventListener('click', myFunction);
    console.log("remove");
});

function myFunction(){
    console.log("click");
    // generate random hex color
    let hexColor = "#";
    for (let i = 0; i < 6; i++){
        hexColor +=     hexCombinations[getRandomNumber()];
    }
    console.log(hexColor);
    // apply color on page
    colorText.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}

function getRandomNumber(){
    return Math.floor(Math.random() * hexCombinations.length)
}