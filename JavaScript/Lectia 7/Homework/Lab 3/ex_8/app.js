let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let index = 0;
let userResponse;

while (confirm(`${days[index]}. Do you want to see the next day?`)){
    if (userResponse) {
        index++;
        if (index === 7){
            index = 0;
        }
    }
}