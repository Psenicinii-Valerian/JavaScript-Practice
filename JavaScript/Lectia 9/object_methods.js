/* 
    // this, reference to the current object
    let student = {
        name: "Petru",
        age: 18
    }

    student.sayHi = function() {
        console.log("Hi guys");
    };

    // get the function property from the object
    student.sayHi();

    // OOP
    student = {
        sayHi: function(){
            console.log("Hello");
        }
    }

    // shortened version
    student = {
        sayHi(){
            console.log("Hi people!");
        }
    }

    // create an object with properties and use them in its function
    user = {
        name: "Iurie",
        age: 21,
        
        sayHi(){
            console.log(`Hi, I'm ${this.name}`);
        }
    };

    user.sayHi();
*/

user = {
    name: "Iurie",
    age: 21,
    
    sayHi(){
        console.log(`Hi, I'm ${this.name}`);
    }
};

user.sayHi();

let admin = user;
user = null;

// call sayHi method for admin object
admin.sayHi();
/////////////////////////////////////

let u = { name: "Victor"};
let a = { name: "Administrator"};

function sayHi(){
    console.log(this.name);
}

u.f = sayHi;
a.f = sayHi;

u.f();
a.f();
a["f"]();

function sayHi2(){
    console.log(this);
}

sayHi2();

console.clear();

// arrow functions and this - it doesn't have its own this. It can acces data from outer container(level)
user = {
    firstName: "Iliusha",
    sayHi(){
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user.sayHi();


// user = {
//     firstName: "Iliusha",
//     sayHi(){
//         let arrow = function() {console.log(this.firstName);} // this == undefined
//         arrow();
//     }
// };

// user.sayHi();

function makeUser() {
    console.log(this);
    return {
        name: "Batman",
        ref: this
    }
}

user = makeUser();
console.log("##", user.ref.name);
