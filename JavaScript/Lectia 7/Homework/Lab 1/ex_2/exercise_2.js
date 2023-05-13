const birthYear = prompt("What is the year of your birth?");
alert(`This year you will be ${new Date().getFullYear() - Number(birthYear)} years old`);