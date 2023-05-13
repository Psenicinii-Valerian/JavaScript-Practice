console.log("It works");

const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    // console.log(now);
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90; // seconds * 60 + 90
    // we add +90 bcs seconds hand should start from a vertical position
    secHand.style.transform = `rotate(${secondsDegree}deg)`;
    // console.log(seconds, secondsDegree);
    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);

/*
    // Another realisation of this code:
    setInterval(setClock, 1000);

    const hrHand = document.querySelector('[data-hour-hand]');
    const minuteHand = document.querySelector('[data-minute-hand]');
    const secondHand = document.querySelector('[data-second-hand]');

    function setClock() {
        const currentDate = new Date();
        const secondsRatio = currentDate.getSeconds() / 60;
        const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
        const hrRatio = (minutesRatio + currentDate.getHours()) / 12;
        setRotation(secondHand, secondsRatio);
        setRotation(minuteHand, minutesRatio);
        setRotation(hrHand, hrRatio);
    }

    function setRotation(element, rotationRatio) {
        element.style.setProperty('--rotation', rotationRatio * 360);
    }
*/