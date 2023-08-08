const data = document.getElementById("data");
const cart = document.getElementById("cart");
const total = document.getElementById("total");

const products = [
    {
        id: 1,
        name: "Million Paco Rabanne",
        img: "./images/million.jpg",
        price: 100,
    },
    {
        id: 2,
        name: "Orange Hugo Boss",
        img: "./images/hugo_boss.jpg",
        price: 200,
    },
    {
        id: 3,  
        name: "Allure Blanche Chanel",
        img: "./images/allure.jpg",
        price: 300,
    }
];

products.forEach((pr) => {
    data.innerHTML += `<div class='product'>
        <img src=${pr.img}>
        <h2>Name: ${pr.name}</h2>
        <p>Price: ${pr.price}$</p>
        <button onClick="addToCart(${pr.id})">Add to cart</button>
        </div>`;
});

let cartArray = [];

function addToCart(id){
    if (cartArray.filter((pr) => pr.id === id).length > 0) {
        // cartArray.map() - parcurge toate elementele unui tablou, ca un fel de for ce returneaza elemente
        cartArray = cartArray.map((pr) => {
            if (pr.id === id){
                return {
                    // destructurizarea obiectului (returnam proprietatile obiectului) deoarece return {...code...} deja returneaza un obiect
                    ...pr,
                    qnt: pr.qnt + 1,
                };
            } else {
                return pr;
            }
        });
    } else {
        // ...product allow us to send all the properties of the object as a param
        const product = products.filter((pr) => pr.id === id)[0];
        cartArray.push({...product, qnt: 1});
    }
    console.log(cartArray);
    // cart.innerHTML = ""; - allows us to clear previous info from where we click on "Add to cart" so we can store
    // each product one time 
    cart.innerHTML = "";
    showCart();
    // map, forEach, filter toate parcurg tabelul nostru de obiecte si pot primi ca parametru o functie
    getSum();
}

function changeQnt(id, type){
    cartArray = cartArray.map(c => {
        if (c.id === id) {
            if (type === "minus" && c.qnt > 1){
                return {
                    ...c,
                    qnt: c.qnt - 1,
                };
            } else if (type === "plus") {
                return {
                    ...c, 
                    qnt: c.qnt + 1,
                };
            } else {
                return c;
            }
        } else {
            return c;
        }
    });
    showCart();
    getSum();
}

function showCart(){
    cart.innerHTML = "";
    cartArray.forEach( 
        (c) => 
            (cart.innerHTML += `
                <div class='cart-item'>
                    <img src=${c.img}>
                    <div>
                        <h2>Name: ${c.name}</h2>
                        <p>Price: ${c.price}</p>
                        <p>Quantity: ${c.qnt}</p>
                        <button onClick="changeQnt(${c.id}, 'minus')">-</button>
                        <button onClick="changeQnt(${c.id}, 'plus')">+</button>
                    </div>
                </div>
            `)
    );
}

function getSum() {
    // .reduce() - function that will group all of the property's values 
    let totalPrice = cartArray.reduce((s, c) => s + c.price * c.qnt, 0);
    // document.getElementById("total").textContent = `Total price: ${totalPrice}$`;
    total.innerHTML = ""
    total.innerHTML += `<h2>Total price: ${totalPrice}$</h2>`
}