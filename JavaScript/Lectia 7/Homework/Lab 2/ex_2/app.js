let number;
do {
    number = parseInt(prompt("Enter a number from 0 to 9:"));
} while(number < 0 || number > 9);

switch(number){
    case 0: alert(")"); 
            break;
    case 1: alert("!");
            break;
    case 2: alert("@");
            break;
    case 3: alert("#");
            break;
    case 4: alert("$");
            break;   
    case 5: alert("%");
            break;
    case 6: alert("^");
            break;
    case 7: alert("&");
            break;
    case 8: alert("*");      
            break;
    case 9: alert("(");      
            break;
}