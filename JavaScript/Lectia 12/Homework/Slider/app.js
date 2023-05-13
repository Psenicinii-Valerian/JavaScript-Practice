// DOM - Document object module - Modificarea contentului/stilizarii din HTML. De asemenea permite adaugarea evenimentelor pentru elemente

const slider = document.getElementById("slider");
const left = document.getElementById("left");
const right = document.getElementById("right");
const pagination = document.getElementById("pagination");

function changePage(current) {
    pagination.textContent = `${current+1}/${images.length}`
}

let images = [
    "/Images/Real_Madrid.jpg",
    "/Images/Ac_Milan.jpg",
    "/Images/Inter_Milan.jpg",
    "/Images/Man_City.jpg",
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