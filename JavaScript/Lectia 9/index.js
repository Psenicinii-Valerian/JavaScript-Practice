console.log(" !!! ", this);

function abc() {
    console.log("inside function");
    this.style.background = 'blue';
}

let p = document.querySelectorAll('p');

p.forEach(function(element){
    element.onclick = abc;
});

let windowsHeight = this.outerHeight;
console.log("{{wH ", windowsHeight);