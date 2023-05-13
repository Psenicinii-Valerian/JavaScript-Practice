const reviews = [
    {
        id: 1,
        name: "Jon Doe",
        position: "QA",
        img: "./images/Red_Employee.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, voluptatem ullam quasi laboriosam, omnis maxime totam pariatur deserunt quam deleniti quod soluta repellat laudantium ipsam nihil assumenda cupiditate tempora commodi"
    },
    {
        id: 2,
        name: "Larry Page",
        position: "DEV",
        img: "./images/Employees.jpg",
        text: " Voluptate, voluptatem ullam quasi laboriosam, omnis maxime totam pariatur deserunt quam deleniti quod soluta repellat laudantium ipsam nihil assumenda cupiditate tempora commodi"
    },
    {
        id: 3,
        name: "Steve Worker",
        position: "Middle",
        img: "./images/Employee.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, voluptatem ullam quasi laboriosam, omnis maxime totam pariatur deserunt quam deleniti quod soluta repellat laudantium ipsam nihil assumenda cupiditate tempora commodi"
    },
    {
        id: 4,
        name: "Chris Parker",
        position: "Technical Engineer",
        img: "./images/Emp_Table.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, voluptatem ullam quasi laboriosam, omnis maxime totam pariatur deserunt quam deleniti quod soluta repellat laudantium ipsam nihil assumenda cupiditate tempora commodi"
    },
];

// items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// starting index
let currentIndex = 0;

// load initial state
window.addEventListener("DOMContentLoaded", function(){
    const item = reviews[currentIndex];
    img.src = item.img;
    author.textContent = item.position;
    job.textContent =item.position;
    info.textContent = item.text;
});

function showPerson(personId){
    const item = reviews[personId];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.position;
    info.textContent = item.text;   
};

// show previous review/person
prevBtn.addEventListener("click", function(){
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = reviews.length-1;
    }
    showPerson(currentIndex);
});

// show next review/person
nextBtn.addEventListener("click", function(){
    currentIndex++;
    if(currentIndex > reviews.length-1){
        currentIndex = 0;
    }
    showPerson(currentIndex);
});

// show random review/person
randomBtn.addEventListener("click", function(){
    currentIndex = Math.floor(Math.random() * reviews.length);
    showPerson(currentIndex);
});

setInterval(function(){
    // randomBtn.click();
    currentIndex = Math.floor(Math.random() * reviews.length);
    showPerson(currentIndex);
}, 5000)