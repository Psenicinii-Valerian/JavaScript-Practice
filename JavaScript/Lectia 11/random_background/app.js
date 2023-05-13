const colors = ['green', 'red', 'blue', 'rgb(133, 122, 200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// function that is used/called when a specific event is triggered(such as click on an element or key press)
// and allows us to call other function that is specified as second parameter
btn.addEventListener("click", function(){
    console.log("click");
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    // set background color
    document.body.style.background = colors[randomNumber];
    // set color value text in Background Color
    color.textContent = colors[randomNumber];
    // set text color
    color.style.color = colors[getRandomNumber()]
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length); // rounds to lowest integer value - similar to trunc
}