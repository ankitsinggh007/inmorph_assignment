const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const answer1 = document.getElementById('answer-1');

function getCurrentDateAndTime() {


    let currentDate = new Date();
    let day = currentDate.getDay();
    let hour = currentDate.getHours()


    if (hour > 12) {
        hour = hour - 12;
        hour = `${hour} PM`;
    }
    else if (hour == 12) {
        hour = '12 PM';
    }
    else if (hour == 0) {
        hour = '00 AM'
    }
    else {
        hour = `${hour} PM`;

    }
    let min = currentDate.getMinutes();
    let sec = currentDate.getSeconds();

    let time = `${hour} : ${min} : ${sec}`;


    let today = `Today is : ${weekdays[day]}`;

    time = `Current time is ${time}`;


    return `${today} 
${time}`;

}

const ans = getCurrentDateAndTime();
answer1.innerHTML = `<b>${ans}</b>`;

const answer2 = document.getElementById('answer-2');

answer2.addEventListener('click', () => window.print());

const answer3 = document.getElementById('answer-3');

const getDate = () => {

    let currentDate = new Date();

    let date = currentDate.getDate();
    let month = currentDate.getMonth();
    let year = currentDate.getFullYear();

    if (month < 9) {
        month = `0${month}`;
    }

    return [`${month}/${date}/${year}`, `${month}-${date}-${year}`, `${date}-${month}-${year}`];
}

const date = getDate()


answer3.innerHTML = `<b>Formatted Dates:</b>
<ul >
    <li>${date[0]}</li>
    <li>${date[1]}</li>
    <li>${date[2]}</li>
    </ul>`;

const answer4 = document.getElementById('answer-4');

const getAreaOfTriangle = (a, b, c) => {
    let s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
getAreaOfTriangle(5, 6, 7);

answer4.innerHTML = `<b>Area of Triangle:</b> ${getAreaOfTriangle(5, 6, 7)} square units`;

const answer5 = document.getElementById('answer-5');

const reverseString = (str) => {
    console.log(str, "str")
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        str.unshift((str.pop()));
    }

    str = str.join("")
    return str;
}

answer5.innerText = reverseString('w3resource');



const answer6 = document.getElementById('answer-6');
const input = document.getElementById('input-6');

const submit = document.getElementById('leap-year-form');
function checkLeapYear(year) {
    let isLeap = false;
    if (year % 4 === 0 && year >= 4) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                isLeap = true;
                return;
            } else {
                isLeap = false;
            }
        } else {
            isLeap = true;
        }
    } else {
        isLeap = false;
    }


    return !isLeap ? `No ${year} not a leap year 👎` : `Yes ${year} leap year 👍`

}

console.log(input.value)

submit.addEventListener('submit', (e) => {

    e.preventDefault();


    answer6.innerText = checkLeapYear(input.value);

    input.value = '';
    input.focus();


})

const answer7 = document.getElementById('answer-7');

function findSundayJanuaryFirst() {
    let years = [];

    for (let year = 2014; year <= 2050; year++) {
        let date = new Date(year, 0, 1);
        if (date.getDay() === 0) {
            years.push(year);
        }
    }

    return years;
}

answer7.innerText = `Sundays on January 1st between 2014 and 2050: ${findSundayJanuaryFirst().join(', ')}`;

const answer8 = document.getElementById('answer-8');

const button8 = document.getElementById('buttom-8');

let reandomNumber = () => {
    const num = (Math.random() * 10).toFixed(0)
    console.log(num);
    return num
};
let luckyNumber = reandomNumber();
button8.addEventListener('click', () => {
    let userInput = window.prompt("Please enter your guess (1-10)");
    console.log(userInput);

    if (userInput == luckyNumber) {
        window.alert("You guessed it right 🎉🎉🎉🎉");
    }
    else {
        window.alert(`Sorry, the correct number was ${luckyNumber}. 😑😑😑😑`);
    }

})

const answer9 = document.getElementById('answer-9');

const leftForChristmas = () => {

    const today = new Date();
    const currentYear = today.getFullYear();

    let christmas = new Date(currentYear, 11, 25);

    if (today > christmas) {
        christmas = new Date(currentYear + 1, 11, 25);
    }

    const diffTime = christmas - today;

    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    console.log(diffDays, "diff")
    answer9.innerText = `Days left until Christmas: ${diffDays}`;

}
leftForChristmas();

const answer10 = document.getElementById('answer-10');
const operand1 = document.getElementById('input-10-1');
const operand2 = document.getElementById('input-10-2');
const multiplicationFrom = document.getElementById('multiplication-form');


multiplicationFrom.addEventListener('submit', (e) => {

    e.preventDefault();

    const multiplication = operand1.value * operand2.value;
    const division = operand1.value / operand2.value;

    answer10.innerText = `operand-1:${operand1.value} 
     and operand-2:${operand2.value} 
     Multiplication: ${multiplication} and 
     Division ${division.toFixed(2)}`;


})





