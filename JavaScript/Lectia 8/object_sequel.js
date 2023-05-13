let message = "Welcome to JS World";
let phrase = message; // it's a copied value

console.log(message === phrase);

let user = {
    name: "Mark"
}

let admin = user; // copy the reference

admin.name = "Malkman";
console.log(user.name);

// comparing references
let a = {}
let b = a;

console.log(a == b);
console.log(a === b);

a = {};
b = {};

console.log(a == b);

const administrator = {
    name: "Iurie"
}

administrator.name = "Tudor"; // we can change object's properties(inside) even if it was declared as const
console.log(administrator.name);

// administrator = admin; // cannot assign a new object because administrator was declared as const

// Cloning of objects
user = {
    name: "John",
    position: "Dev"
}

let clone = {};
// let's copy all properties to new object
for (let key in user){
    clone[key] = user[key];
}

clone.name = "Helen";
console.log(JSON.stringify(user, null, 4));
console.log(JSON.stringify(clone, null, 4));

// Cloning of objects 2
// Object.assign(dest, source1, ..., sourceN);
let permission = {canMakeDesign: true};
let permission1 = {canDoTesting: true};
let positionOverride = {position: "Middle"}; // if property exists it will override original object's property

// Copy all permissions to user
Object.assign(user, permission, permission1, positionOverride);
console.log(user.position);
console.log(user.canMakeDesign);
console.log(user.canDoTesting);

// Cloning of an old object into a new one
clone = Object.assign({}, user);

// Nested objects
user = {
    name: "Nike",
    company: {
        ceo: "Julian",
        address: {
            country: "France",
            city: "Paris",
        },

        mobile: "+33 6 12 34 56 78"
    },
    isAdmin: false
};

// View city
console.log(user.company.address.city);

// Clone user
clone = Object.assign({}, user);

console.log(clone);