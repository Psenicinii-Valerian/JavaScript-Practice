// Garbage collection - technology that allow our program to clean the memory automatically. It happens when we delete objects/properties
// or assign null or we don't have any links to object (it is not used anymore - isolated isle)
let user = {
    name: "Mary"
}

// clear object memory
user = null;

// interlinked objects
function marriage(man, woman){
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marriage({name: "Sasha"}, {name: "Masha"});
console.log(family);

// to delete reference/relationship between objects
delete family.father; // to remove all object's properties
delete family.mother.husband // to remove only the reference property with other object