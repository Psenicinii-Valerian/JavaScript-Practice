let string = "";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach(button => {
    button.addEventListener("click", e => {
        if(e.target.innerText === "="){
            if (string !== "" && !(string[string.length-1] === "+" || string[string.length-1] === "-" || string[string.length-1] === "*" || string[string.length-1] === "/")){
                string = eval(string).toString();
                document.getElementById("result").innerText = string;
            }
        }
        else if(e.target.innerText === "AC" ){
            string = "";
            document.getElementById("result").innerText = string;
        }
        else if(e.target.innerText === "⌫"){
            string = string.slice(0, string.length-1);
            document.getElementById("result").innerText = string;
        }
        else if(e.target.innerText === "%"){
            let numbers;
            if (string.includes("+")){
                numbers = string.split("+");
                numbers[1] /= 100;
                string = numbers[0] + "+" + numbers[1];
            }
            else if (string.includes("-")){
                numbers = string.split("-");
                numbers[1] /= 100;
                string = numbers[0] + "-" + numbers[1];
            }
            else if (string.includes("*")){
                numbers = string.split("*");
                numbers[1] /= 100;
                string = numbers[0] + "*" + numbers[1];
            }
            else if (string.includes("/")){
                numbers = string.split("/");
                numbers[1] /= 100;
                string = numbers[0] + "/" + numbers[1];
            }   
            else {
                string = (string/100).toString();
            }
            document.getElementById("result").innerText = string;
        }
        else if(e.target.innerText === "+"){
            if (string !== ""){
                if (!(string[string.length-1] === "+" || string[string.length-1] === "-" || string[string.length-1] === "*" || string[string.length-1] === "/")) {
                    string += "+";
                }
                else {
                    string = string.slice(0, string.length-1);
                    string += "+";
                }
                document.getElementById("result").innerText = string;
            }
        }
        else if(e.target.innerText === "-"){
            if (string !== ""){
                if (!(string[string.length-1] === "+" || string[string.length-1] === "-" || string[string.length-1] === "*" || string[string.length-1] === "/")) {
                    string += "-";
                }
                else {
                    string = string.slice(0, string.length-1);
                    string += "-";
                }
                document.getElementById("result").innerText = string;
            }
        }
        else if(e.target.innerText === "×"){
            if (string !== ""){
                if (!(string[string.length-1] === "+" || string[string.length-1] === "-" || string[string.length-1] === "*" || string[string.length-1] === "/")) {
                    string += "*";
                }
                else {
                    string = string.slice(0, string.length-1);
                    string += "*";
                }
                document.getElementById("result").innerText = string;
            }
        }
        else if(e.target.innerText === "÷"){
            if (string !== ""){
                if (!(string[string.length-1] === "+" || string[string.length-1] === "-" || string[string.length-1] === "*" || string[string.length-1] === "/")) {
                    string += "/";
                }
                else {
                    string = string.slice(0, string.length-1);
                    string += "/";
                }
                document.getElementById("result").innerText = string;
            }
        }
        else if(e.target.innerText === "+/-"){
            let numbers;
            if (string.includes("+")){
                numbers = string.split("+");
                numbers[1] *= -1;
                string = numbers[0] + "+" + numbers[1];
            }
            else if (string.includes("-")){
                numbers = string.split("-");
                numbers[1] *= -1;
                string = numbers[0] + "-" + numbers[1];
            }
            else if (string.includes("*")){
                numbers = string.split("*");
                numbers[1] *= -1;
                string = numbers[0] + "*" + numbers[1];
            }
            else if (string.includes("/")){
                numbers = string.split("/");
                numbers[1] *= -1;
                string = numbers[0] + "/" + numbers[1];
            }   
            else {
                string *= -1;
            }
            document.getElementById("result").innerText = string;
        }
        else if(e.target.innerText === "."){
            let numbers;
            if (string.includes("+")){
                numbers = string.split("+");
                if (!numbers[1].includes(".")){
                    numbers[1] += ".";
                    string = numbers[0] + "+" + numbers[1];
                }
            }
            else if (string.includes("-")){
                numbers = string.split("-");
                if (!numbers[1].includes(".")){
                    numbers[1] += ".";
                    string = numbers[0] + "+" + numbers[1];
                }
            }
            else if (string.includes("*")){
                numbers = string.split("*");
                if (!numbers[1].includes(".")){
                    numbers[1] += ".";
                    string = numbers[0] + "+" + numbers[1];
                }
            }
            else if (string.includes("/")){
                numbers = string.split("/");
                if (!numbers[1].includes(".")){
                    numbers[1] += ".";
                    string = numbers[0] + "+" + numbers[1];
                }
            }   
            else {
                if (!string.includes(".")){
                    string += ".";
                }
            }
            document.getElementById("result").innerText = string;
        }
        else{
            string += e.target.innerText;
            document.getElementById("output").innerHTML = `<p id="result">${string}</p>`;
        }
    });
});