const title = document.getElementById("title");
const width = document.getElementById("width");
const height = document.getElementById("height");
const setSize = document.getElementById("set-size");
const changeTitle = document.getElementById("change-title");
const download = document.getElementById("download");
const canvas = document.getElementById("canvas");
const size = document.getElementById("size");
const color = document.getElementById("color");
const clear = document.getElementById("clear");
canvas.height = 500;
canvas.width = 500;

changeTitle.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        title.textContent = changeTitle.value
    }
});

setSize.addEventListener("click", () => {
    if (width.value > 0 && height.value > 0) {
        canvas.height = height.value;
        canvas.width = width.value;
    }
});

let context = canvas.getContext("2d");

let brushSize = 3;
let brushColor = "#000";

let prevX = null;
let prevY = null;

let draw  = false;

size.addEventListener("change", () => {
    if (size.value > 0 && size.value <= 25){
        brushSize = size.value;
    }
});


color.addEventListener("change", () => {
    brushColor = color.value;
});

clear.addEventListener("click", () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener("mousedown", () => draw = true);
canvas.addEventListener("mouseup", () => draw = false);
canvas.addEventListener("mouseout", () => draw = false);

canvas.addEventListener("mousemove", (e) => {

    if (prevX == null || prevX == null || !draw){
        prevX = e.offsetX;
        prevY = e.offsetY;
        return;
    }

    context.lineWidth = brushSize;
    context.strokeStyle = brushColor;

    let mouseX = e.offsetX;
    let mouseY = e.offsetY;

    context.beginPath();
    context.moveTo(prevX, prevY);
    context.lineTo(mouseX, mouseY);
    context.stroke();

    prevX = e.offsetX;
    prevY = e.offsetY;
});

download.addEventListener("click", () => {
    // creating an a link element: <a href=""></a>
    let a = document.createElement("a");
    // saving date as an image of type png
    let data = canvas.toDataURL("imag/png");
    // seting the "href" attribute of the <a> element to contain the converted data of the canvas (the image URL).
    a.href = data;
    // setting the file name, which will be formed from the content
    // of the element with the id 'title' and the extension '.png'."
    a.download = title.textContent + ".png";
    
    // a 'click' event is simulated on <a> element, which will prompt the browser to download the PNG image."
    a.click();
});
