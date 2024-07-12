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


const tempConverter = document.getElementById('celsiusToFahrenheit');
const input11 = document.getElementById('celsius');
const answer11 = document.getElementById('answer-11');

tempConverter.addEventListener('submit', (e) => {
    e.preventDefault();
    answer11.innerText = convertTemp(input11.value);
});

function convertTemp(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
}

const answer12 = document.getElementById('answer-12');
answer12.innerText = `Current URL: ${window.location.href}`;


const reverseForm = document.getElementById('reverseNumber');

const input13 = document.getElementById('input-13');

const answer13 = document.getElementById('answer-13');
reverseForm.addEventListener('submit', (e) => {

    e.preventDefault();

    let reversed = input13.value.split('').reverse().join('');

    answer13.innerText = `Reversed String: ${reversed}`;


});



const palindromeForm = document.getElementById('palindromeForm');
const inputPalindrome = document.getElementById('inputPalindrome');
const answer14 = document.getElementById('answer-14');

palindromeForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let str = inputPalindrome.value.trim();

    if (isPalindrome(str)) {
        answer14.innerText = `"${str}" is a palindrome! 🎉`;
    } else {
        answer14.innerText = `"${str}" is not a palindrome. 😕`;
    }
});

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}
const combinationsForm = document.getElementById('combinationsForm');
const inputCombination = document.getElementById('inputCombination');
const answer16 = document.getElementById('answer-16');

combinationsForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let str = inputCombination.value.trim();

    let combinations = generateCombinations(str);

    answer16.innerText = `Combinations: ${combinations.join(', ')}`;
});

function generateCombinations(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}

const alphabeticalForm = document.getElementById('alphabeticalForm');
const inputAlphabetical = document.getElementById('inputAlphabetical');
const answer17 = document.getElementById('answer-17');

alphabeticalForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let str = inputAlphabetical.value.trim();

    let sortedString = sortStringAlphabetically(str);

    answer17.innerText = `Sorted String: ${sortedString}`;
});

function sortStringAlphabetically(str) {
    return str.split('').sort().join('');
}


const uppercaseForm = document.getElementById('uppercaseForm');
const inputUppercase = document.getElementById('inputUppercase');
const answer18 = document.getElementById('answer-18');

uppercaseForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let str = inputUppercase.value.trim();

    let convertedString = convertFirstLetterToUpperCase(str);

    answer18.innerText = `Converted String: ${convertedString}`;
});

function convertFirstLetterToUpperCase(str) {
    return str.replace(/\b[a-zA-Z]/g, function (char) {
        return char.toUpperCase();
    });
}

const longestWordForm = document.getElementById('longestWordForm');
const input19 = document.getElementById('input-19');
const answer19 = document.getElementById('answer-19');

longestWordForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputValue = input19.value.trim();

    const longestWord = findLongestWord(inputValue);

    answer19.innerText = `Longest word in "${inputValue}": ${longestWord}`;
});

function findLongestWord(str) {
    let words = str.split(/\s+/);
    let longestWord = '';

    words.forEach(word => {
        let cleanWord = word.replace(/[^a-zA-Z]/g, '');
        if (cleanWord.length > longestWord.length) {
            longestWord = cleanWord;
        }
    });

    return longestWord;
}

const countVowelsForm = document.getElementById('countVowelsForm');
const input20 = document.getElementById('input-20');
const answer20 = document.getElementById('answer-20');

countVowelsForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputValue = input20.value.trim();

    const vowelCount = countVowels(inputValue);

    answer20.innerText = `Number of vowels in "${inputValue}": ${vowelCount}`;
});

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

const checkPrimeForm = document.getElementById('checkPrimeForm');
const input21 = document.getElementById('input-21');
const answer21 = document.getElementById('answer-21');

checkPrimeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputValue = parseInt(input21.value.trim());

    const isPrime = isPrimeNumber(inputValue);

    if (isPrime) {
        answer21.innerText = `${inputValue} is a prime number.`;
    } else {
        answer21.innerText = `${inputValue} is not a prime number.`;
    }
});

function isPrimeNumber(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

const checkTypeForm = document.getElementById('checkTypeForm');
const input22 = document.getElementById('input-22');
const answer22 = document.getElementById('answer-22');

checkTypeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputValue = input22.value.trim();

    const type = getInputType(inputValue);

    answer22.innerText = `Type of '${inputValue}' is ${type}`;
});

function getInputType(value) {
    if (value === undefined || value === "") {
        return "undefined/empty";
    }

    if (!isNaN(value) && value !== "") {
        return Number.isInteger(parseFloat(value)) ? "integer" : "float";
    }

    if (value.toLowerCase() === "true" || value.toLowerCase() === "false") {
        return "boolean";
    }



    return "string";
}


const identityMatrixForm = document.getElementById('identityMatrixForm');
const input23 = document.getElementById('input-23');
const answer23 = document.getElementById('answer-23');

identityMatrixForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const n = parseInt(input23.value.trim());

    const matrix = generateIdentityMatrix(n);

    answer23.innerText = matrix.map(row => row.join(' ')).join('\n');
});

function generateIdentityMatrix(n) {
    const matrix = [];

    for (let i = 0; i < n; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(i === j ? 1 : 0);
        }
        matrix.push(row);
    }

    return matrix;
}

const numbersForm = document.getElementById('numbersForm');
const inputNumbers = document.getElementById('input-numbers');
const answer24 = document.getElementById('answer-24');

numbersForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const numbers = inputNumbers.value.trim().split(',').map(num => parseInt(num.trim()));

    const result = findSecondLowestAndGreatest(numbers);

    answer24.innerText = `Second Lowest: ${result.secondLowest}, Second Greatest: ${result.secondGreatest}`;
});

function findSecondLowestAndGreatest(arr) {
    if (arr.length < 2) {
        return { secondLowest: 'Undefined', secondGreatest: 'Undefined' };
    }

    arr.sort((a, b) => a - b);

    const uniqueNumbers = [...new Set(arr)];

    if (uniqueNumbers.length < 2) {
        return { secondLowest: 'Undefined', secondGreatest: 'Undefined' };
    }

    return {
        secondLowest: uniqueNumbers[1],
        secondGreatest: uniqueNumbers[uniqueNumbers.length - 2]
    };
}


const perfectNumberForm = document.getElementById('perfectNumberForm');
const inputNumber = document.getElementById('input-number');
const answer25 = document.getElementById('answer-25');

perfectNumberForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const number = parseInt(inputNumber.value.trim());

    const isPerfect = checkPerfectNumber(number);

    answer25.innerText = `${number} ${isPerfect ? 'is' : 'is not'} a perfect number.`;
});

function checkPerfectNumber(num) {
    if (num <= 1) {
        return false;
    }

    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) {
                sum += num / i;
            }
        }
    }

    return sum === num;
}

const factorForm = document.getElementById('factorForm');
const inputNumber26 = document.getElementById('input-number26');
const answer26 = document.getElementById('answer-26');

factorForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const number = inputNumber26.value.trim();
    console.log(inputNumber26);
    console.log(number, "lk");
    if (number <= 0 || isNaN(number)) {
        answer26.innerText = 'Please enter a valid positive integer.';
        return;
    }

    const factors = computeFactors(number);
    answer26.innerText = `Factors of ${number}: ${factors.join(', ')}`;
});

function computeFactors(num) {
    const factors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            factors.push(i);
            if (i !== num / i) {
                factors.push(num / i);
            }
        }
    }
    factors.sort((a, b) => a - b);
    return factors;
}

const exponentForm = document.getElementById('exponentForm');
const inputBase = document.getElementById('input-base');
const inputExponent = document.getElementById('input-exponent');
const answer28 = document.getElementById('answer-28');

exponentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const base = parseInt(inputBase.value.trim());
    const exponent = parseInt(inputExponent.value.trim());

    if (isNaN(base) || isNaN(exponent)) {
        answer28.innerText = 'Please enter valid numbers.';
        return;
    }

    const result = computeExponent(base, exponent);
    answer28.innerText = `${base}^${exponent} = ${result}`;
});

function computeExponent(base, exponent) {
    return Math.pow(base, exponent);
}

const uniqueCharactersForm = document.getElementById('uniqueCharactersForm');
const inputString = document.getElementById('input-string');
const answer29 = document.getElementById('answer-29');

uniqueCharactersForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const str = inputString.value.trim();

    const uniqueChars = extractUniqueCharacters(str);
    answer29.innerText = `Unique Characters: ${uniqueChars}`;
});

function extractUniqueCharacters(str) {
    return str
        .split('')
        .filter((char, index, self) => self.indexOf(char) === index)
        .join('');
}

const occurrencesForm = document.getElementById('occurrencesForm');
const inputStringOccurrences = document.getElementById('input-string-occurrences');
const answer30 = document.getElementById('answer-30');

occurrencesForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const str = inputStringOccurrences.value.trim();

    const occurrences = countLetterOccurrences(str);
    displayOccurrences(occurrences);
});

function countLetterOccurrences(str) {
    const counts = {};

    for (let char of str.toLowerCase()) {
        if (/[a-z]/.test(char)) {
            counts[char] = counts[char] ? counts[char] + 1 : 1;
        }
    }

    return counts;
}

function displayOccurrences(occurrences) {
    let tableHTML = '<table>';
    tableHTML += '<tr><th>Letter</th><th>Occurrences</th></tr>';

    for (let letter in occurrences) {
        tableHTML += `<tr><td>${letter}</td><td>${occurrences[letter]}</td></tr>`;
    }

    tableHTML += '</table>';
    answer30.innerHTML = tableHTML;
}

const binarySearchForm = document.getElementById('binarySearchForm');
const inputArray = document.getElementById('input-array');
const searchValue = document.getElementById('search-value');
const searchResult = document.getElementById('search-result');

binarySearchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const arrStr = inputArray.value.trim();
    const valueToSearch = parseInt(searchValue.value.trim());

    const arr = arrStr.split(',').map(item => parseInt(item.trim()));

    if (!isValidArray(arr)) {
        searchResult.innerText = 'Please enter a valid sorted array.';
        return;
    }

    const index = binarySearch(arr, valueToSearch);

    if (index !== -1) {
        searchResult.innerText = `Found ${valueToSearch} at index ${index}.`;
    } else {
        searchResult.innerText = `${valueToSearch} not found in the array.`;
    }
});

function isValidArray(arr) {
    return Array.isArray(arr) && arr.every(num => typeof num === 'number') && isSorted(arr);
}

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}