// ask(question, yes, no); // function with 3 parameters

/*
    define a function that will get a question,
    if the result of the question is yes, then call yes function,
    if the result is no, then call no functions
*/

function ask(question, yes, no){
    if (confirm(question)) yes();
    else no();
    // question.length > 10 ? yes() : no(); // short variant - ternar operator
}

function confirm(question){
    if(question.length > 10) {
        return true;
        // throw new Exception(); // JS will try to convert everything to boolean
    } else {
        return false;
    }
}

function showOk(){
    console.log("You agree with that");
}

function showCancel(){
    console.log("You canceled the execution")
}

// use of this function
ask("Do you agree with the fact that JS is easy to learn ?", showOk, showCancel);
ask("Do you agree with the fact that JS is easy to learn ?", function() { console.log("We can take a rest")}, showCancel);
ask("Do you agree with the fact that JS is easy to learn ?", () => console.log("We can take a rest"), showCancel);

// rewrite of ask function
ask(
    "Question one ?", 
    function() {console.log("Was yes");},
    function() {console.log("Was no");}
);

ask(
    "Question one ?", 
    () => {console.log("Was yes");},
    () => {console.log("Was no");}
);