// call setClock() function every second
setInterval(setClock, 1000);

// set some variables for query to select data attribute
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

// function to set up the clock
function setClock() {
    const currentDate = new Date;
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    setRoation(hourHand, hourRatio);
    setRoation(secondHand, secondRatio);
    setRoation(minuteHand, minuteRatio);
}

// function for seting Roation to the clock
function setRoation(element, roationRatio) {
    element.style.setProperty('--roation', roationRatio * 360);
}

// call setClock()
setClock();