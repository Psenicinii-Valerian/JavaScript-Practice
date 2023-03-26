let arr = [1, 2, 3, 87, 5, 40];
console.log(arr);


// sort simple array 
arr.sort();
console.log(arr);

/*

let arr2 = new Array('poama', 'mere', 'cirese', 'pere');
console.log(arr2);
arr2.sort();
console.log(arr2);


// view types of array
console.log(typeof(arr));
console.log(typeof(arr2));

// define objects shortest way
let o = {};
console.log(o);
console.log(typeof(o));

function test() {

}
console.log(typeof(test));

// check if it's array
console.log("\n***************check if it's array***************\n")
console.log(Array.isArray(arr));
console.log(Array.isArray(arr2));
console.log(Array.isArray(o));
console.log(Array.isArray(test));

console.log(arr[0]);
console.log(arr[20]);
console.log(arr.length);
arr[10] = "abracadabra";
console.log(arr.length);
console.log(arr);

arr[5] = test;
arr[6] = function() { console.log("I'm a simple function")};
console.log(arr);

*/

// array sort ascending
// console.log(arr.sort());

/*

// generate a pseudo dropdown
let result = "<ol>\n";
for (let i = 0; i < arr.length; i++) {
    result += "<li>" + arr[i] + "</li>\n";
}

result += "</ol>";
console.log(result);

// add element to array at the end
arr.push("struguri");
arr[arr.length] = 25;
console.log(arr);
console.log(new Array(10, 20, 30));
console.log(new Array(10, 20));
console.log(new Array(10));
console.log([10]);

let arr2 = new Array('poama', 'mere', 'cirese', 'pere');
console.log(arr2);

// sorting ascending
arr2.sort();
console.log(arr2);

// descending sort
arr2.reverse();
console.log(arr2);

//sort ascending array using function for sorting
let arr3 = new Array("grapes", "apples", "plums", "bananas"); 
console.log(arr3.sort());

// let arr = [1, 2, 3, 87, 5, 40];
// sort ascending array using function with another function param with logic for sorting
arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);

// sort descending array using function with another function param with logic for sorting
arr.sort(function (a, b) {
    return b - a;
});
console.log(arr);

// check if it's array
console.log(arr2 instanceof Array);

// remove the last element from array completely(size is decreased)
console.log(arr.length);
arr.pop();
console.log(arr);
console.log(arr.length);

// push elements at the end of array, increase size by 1 item
arr.push(90);
console.log(arr);
console.log(arr.length);
console.log(arr.pop());

// shift - remove the first item from array, decrease size
arr.shift();
console.log(arr);

// unshift - add the first item from array, increase size
arr.unshift(50);
console.log(arr);

*/

/*

// change element in array by index
arr[1] = null;
console.log(arr);

// change element in array by index
arr[1] = '';
console.log(arr);

// delete element from array by index
delete arr[1];
console.log(arr);

*/

// splice
console.log(arr);
// remove from index 3 1 element
// console.log(arr.splice(3, 1));

// remove from 4 till the end of array all items, decrease size
console.log(arr.splice(4));
console.log(arr);
console.log(arr.length);

// transform array to string
console.log("\n***************ARRAY WITH STRINGS***************\n");
var arrString = arr.toString();
console.log(arrString);

let arrString2 = arrString.split(",");
console.log(arrString2);

// Dumitru
console.log("\n***************DUMITRU***************\n");

arr.splice(1, 0, 444); // add 444 to position 1
console.log(arr);

let arr33 = new Array("grapes", "apples", "plums", "bananas"); 

arr33.splice(2,0,"abc"); 
console.log(arr33); 

arr33.splice(2,0,"abc", "cde","efg"); 
console.log(arr33); 

arr33.forEach((x) => console.log(x));

// concat of arrays
// console.log(arr.concat(arrString2, "array three", " "));

// get max from array
console.log("\n*************ARRAY Math.max Math.min*************\n");
console.log(Math.max.apply(null, arr));
console.log(Math.min.apply(null, arr));
console.log(arr);

// ... - spread operator
console.log(Math.min(...arr));

// concatenate 2 arrays with spread operator
console.log(...arr, ...arrString, ...arrString2);

