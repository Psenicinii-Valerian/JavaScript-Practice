// some expression
let i = 5;
i = 20 ? (-5 < 0 ? Math.max(0, 22 + 5) : 5) : 0;

let j = i ? (i < 0 ? Math.max(0, len + i) : i ) : 0;

console.log("Variable i = ", i);

// arr
// let y; - don't use because it's not explicit 

let user = prepareAccount();

function prepareAccount(){
    let user = "admin";
    // other code;
}

console.log(user);

// something about testing
function calculatePower(number, power){
    return number**power;
    // return Math.pow(number, power);
}

// how a tipical js test will look like
describe("Test function calculatePower for number x, and power y", function(){
    it("calculate result for 3 to the power of 4", function(){
        // AAA  
        // Arrange - prepare everything is needed for what to test
        // Act - call method that should be tested
        // Assert - validate/check that expected result == actual result
        assert.equal(calculatePower(3, 4), 81);
    });
});

// Mocha, Jest - test Frameworks

// Transpilers - convert code from one syntax(new) to an older version (Convertor for browsers)
// Example of Transpilers:
let height = height ?? 100;
height = (height !== undefined && height !== null) ? height : 100;

// Polyfils - library to run same JavaScript code in several/different browsers and have same/approximate result 
// contains universal common functions that could be missing in browser

// example when we need to check if trunc of a real number > 2
if(!Math.trunc(2.33) > 2){ // such function could not exist
    // some logic
    // we can implement it here or override existing
    Math.trunc = function(number){
        return number < 0 ? Math.ceil(number) : Math.floor(number);
    }
}