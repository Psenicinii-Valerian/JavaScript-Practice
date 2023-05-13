/*
    // DOM - Document object module - Modificarea contentului/stilizarii din HTML. De asemenea permite adaugarea evenimentelor pentru elemente
    const btn = document.getElementById("btn");
    const btn2 = document.getElementById("btn2");
    const counter = document.getElementById("counter");
    let c = 0;

    btn.addEventListener("click", () => {
        c -= 1;
        counter.textContent = c;
        if (c < 0) counter.style.color = "red";
    });

    btn2.addEventListener("click", () => {
        c += 1;
        counter.textContent = c;
        if (c >= 0) counter.style.color = "green";
    });
*/

const slider = document.getElementById("slider");
const left = document.getElementById("left");
const right = document.getElementById("right");
const pagination = document.getElementById("pagination");

function changePage(current) {
    pagination.textContent = `${current+1}/${images.length}`
}

let images = [
    "https://images.unsplash.com/photo-1682402178953-f2cb484d4024?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1682341794182-4c63204c7d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    "https://images.unsplash.com/photo-1682459155693-5c4427c6abb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
]

slider.style.backgroundImage = `url(${images[0]})`;

let imageNumber = 0;

changePage(imageNumber);

right.addEventListener("click", () => {
    if (imageNumber < images.length-1){
        imageNumber += 1;
    } else{
        imageNumber  = 0;
    }
    slider.style.backgroundImage = `url(${images[imageNumber]})`;
    changePage(imageNumber);
})

left.addEventListener("click", () => {
    if (imageNumber > 0){
        imageNumber -= 1;
    } else{
        imageNumber = images.length-1;
    }
    slider.style.backgroundImage = `url(${images[imageNumber]})`;
    changePage(imageNumber);
})