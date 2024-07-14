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


const input33 = document.getElementById('input-form-33');

const input33Array = document.getElementById('input-33');
const input33num = document.getElementById('input-33-num');
const answer33 = document.getElementById('answer-33');

input33.addEventListener('submit', (e) => {

    e.preventDefault();

    let inputValue = input33.elements['input-33'].value;

    inputValue = inputValue.split(',');

    let array = [];

    console.log(input33num, "33")
    for (let i = 0; i < inputValue.length; i++) {

        const arr = [];

        for (let j = i; j < input33num.value; j++) {

            arr.push(inputValue[j]);
        }
        array.push(arr);
    }
    console.log(array);



});

const inputForm34 = document.getElementById('form-34');

const string34 = document.getElementById('string-34');

const letter34 = document.getElementById('letter-34');

const answer34 = document.getElementById('answer-34');

inputForm34.addEventListener('submit', (e) => {

    e.preventDefault();

    let string = string34.value.split('');

    let letter = letter34.value;

    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }

    answer34.innerText = `The letter "${letter}" appears ${count} times in the string "${string}".`;


});

const inputForm35 = document.getElementById('form-35');

const string35 = document.getElementById('string-35');

const answer35 = document.getElementById('answer-35');

inputForm35.addEventListener('submit', (e) => {

    e.preventDefault();

    let string = string35.value.split('');
    let notRepeatedString = '';

    for (let i = 0; i < string.length; i++) {

        if (notRepeatedString.includes(string[i]))
            notRepeatedString = notRepeatedString.replace(string[i], '');

        else
            notRepeatedString += string[i];

    }

    answer35.innerText = `${notRepeatedString[0]} is  correct ans`;






});


const inputForm36 = document.getElementById('form-36');

const string36 = document.getElementById('country-names-36');

const answer36 = document.getElementById('answer-36');


inputForm36.addEventListener('submit', (e) => {

    e.preventDefault();


    let country = string36.value.split(',');

    console.log(country);

    let ans = country[0];

    for (let i = 0; i < country.length; i++) {

        if (country[i].length > ans.length) {
            ans = country[i];
        }

    }

    answer36.innerText = `The longest country name is "${ans}".`;


});


const form37 = document.getElementById('form-37');

let input37 = document.getElementById('string-37');

const answer37 = document.getElementById('answer-37');


form37.addEventListener('submit', (e) => {

    console.log("helloe")
    e.preventDefault();


    let array = [];
    console.log(input37.value);

    input37 = input37.value;
    let repeated = '';
    for (let i = 0; i < input37.length; i++) {

        if (repeated.includes(input37[i])) {

            array.push(repeated);

            repeated = input37[i];

        }
        else {
            repeated += input37[i];
        }

        if (i + 1 == input37.length) {
            array.push(repeated);
            repeated = '';

        }
    }
    console.log(array, "arr")

    let ans = ''
    for (let i = 0; i < array.length; i++) {

        if (ans.length < array[i].length)
            ans = array[i];

    }


    answer37.innerText = `The longest repeated substring is "${ans}".`;



});

const form38 = document.getElementById('form-38');

const number38 = document.getElementById('number-38');

const answer38 = document.getElementById('answer-38');

form38.addEventListener('submit', (event) => {
    event.preventDefault();

    const ans = factorial(number38.value);

    answer38.innerText = `The factorial of ${number38.value} is ${ans}.`;
})

function factorial(n) {

    if (n === 0 || n === 1) return 1;

    return n * factorial(n - 1);

}


const form39 = document.getElementById('form-39');

const number139 = document.getElementById('number1-39');

const number239 = document.getElementById('number2-39');

const answer39 = document.getElementById('answer-39');


form39.addEventListener('submit', (e) => {

    e.preventDefault();

    const ans = findGCD(number139.value, number239.value);

    answer39.innerText = `The GCD of ${number139.value} and ${number239.value} is ${ans}.`;

})

function findGCD(a, b) {
    if (a == 0 || a < 0)
        return b;
    if (b == 0 || b < 0)
        return a;


    if (a == b)
        return a;


    if (a > b)
        return findGCD(a - b, b);
    return findGCD(a, b - a);
}


const form40 = document.getElementById('form-40');

const start40 = document.getElementById('start-40');

const end40 = document.getElementById('end-40');


const answer40 = document.getElementById('answer-40');


form40.addEventListener('submit', (e) => {

    e.preventDefault();

    let ans = [];

    getRange(+start40.value, +end40.value, ans);

    console.log(ans, "ans")

})


function getRange(start, end, ans) {

    if (end - start <= 0) return;

    if (end - start == 1) return;
    ans.push(start + 1);

    getRange(start + 1, end, ans);


}

const frorm41 = document.getElementById('form-41');


const array41 = document.getElementById('array-41');

const answer41 = document.getElementById('answer-41');


frorm41.addEventListener('submit', (e) => {

    e.preventDefault();

    let ans = sum(array41.value.split(',').map((obj) => +obj));

    answer41.innerText = `The sum of the array elements is ${ans}.`;

});

function sum(array) {
    if (array.length === 1) return array[0];
    const last = array.pop();
    array[0] += +last;
    return sum(array);

}

const form42 = document.getElementById('form-42');

const base42 = document.getElementById('base-42');

const exponent42 = document.getElementById('exponent-42');

const answer42 = document.getElementById('answer-42');


form42.addEventListener('submit', (e) => {

    e.preventDefault();

    let ans = exponentFun(base42.value, exponent42.value);

    answer42.innerText = `The result of ${base42.value} raised to the power of ${exponent42.value} is ${ans}.`;



});

function exponentFun(base, exponent) {

    if (exponent <= 0) return 1;

    return base * exponentFun(base, exponent - 1);


}

const form43 = document.getElementById('form-43');
const fibon = document.getElementById('n-43');

const answer43 = document.getElementById('answer-43');



form43.addEventListener('submit', (e) => {

    e.preventDefault();

    const n = parseInt(fibon.value.trim());

    if (n > 0) {
        const fibonacciSequence = getFibonacciSequence(n);
        answer43.innerText = `The first ${n} Fibonacci numbers are: ${fibonacciSequence.join(', ')}.`;
    } else {
        answer43.innerText = 'Please enter a positive integer.';
    }


});

function getFibonacciSequence(n, sequence = [0, 1]) {
    if (n <= 2) return sequence.slice(0, n);
    if (sequence.length >= n) return sequence;
    const nextTerm = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    return getFibonacciSequence(n, [...sequence, nextTerm]);
}

const form44 = document.getElementById('form-44');

const number44 = document.getElementById('number-44');

const answer44 = document.getElementById('answer-44');


form44.addEventListener('submit', (e) => {

    e.preventDefault();

    let ans = isEven(number44.value);

    answer44.innerText = `The number ${number44.value} is ${ans == 1 ? 'even' : "odd"}.`;

});
function isEven(num) {
    if (num === 0) return true;
    if (num === 1) return false;
    return isEven(num - 2);
}

const form45 = document.getElementById('form-45');

const number145 = document.getElementById('number1-45');

const number245 = document.getElementById('number2-45');

const answer45 = document.getElementById('answer-45');


form45.addEventListener('submit', (e) => {

    e.preventDefault();

    let ans = +number145.value > +number245.value ? number145.value : number245.value;


    answer45.innerText = `The maximum of ${number145.value} and ${number245.value} is ${ans}.`;

});


const form46 = document.getElementById('form-46');

const number146 = document.getElementById('number1-46');

const number246 = document.getElementById('number2-46');

const number346 = document.getElementById('number3-46');

const answer46 = document.getElementById('answer-46');


form46.addEventListener('submit', (e) => {
    e.preventDefault();
    let ans = '';

    let product = +number146.value * +number246.value * +number346.value;
    console.log(product);
    if (product < 0) {

        ans = 'negative';
    }
    else {
        ans = 'positive';
    }
    alert(`your product will have ${ans} value`)
})

const form47 = document.getElementById('form-47');

const number147 = document.getElementById('number1-47');

const number247 = document.getElementById('number2-47');

const number347 = document.getElementById('number3-47');

const answer47 = document.getElementById('answer-47');


form47.addEventListener('submit', (e) => {


    e.preventDefault();
    let num1 = number147.value;
    let num2 = number247.value;
    let num3 = number347.value;

    if (num1 >= num2 && num1 >= num3) {
        if (num2 >= num3) {
            console.log(`${num1}, ${num2}, ${num3}`);
        } else {
            console.log(`${num1}, ${num3}, ${num2}`);
        }
    } else if (num2 >= num1 && num2 >= num3) {
        if (num1 >= num3) {
            console.log(`${num2}, ${num1}, ${num3}`);
        } else {
            console.log(`${num2}, ${num3}, ${num1}`);
        }
    } else if (num3 >= num1 && num3 >= num2) {
        if (num1 >= num2) {
            console.log(`${num3}, ${num1}, ${num2}`);
        } else {
            console.log(`${num3}, ${num2}, ${num1}`);
        }
    }


});

const from48 = document.getElementById('form-48');

const answer48 = document.getElementById('answer-48');


from48.addEventListener('submit', (e) => {

    e.preventDefault();

    for (let i = 0; i < 15; i++) {

        if (i % 2 == 0) {
            answer48.innerText += `${i} is even. \n`;
        }
        else {
            answer48.innerText += `${i} is odd. \n`;
        }

    }






});

const form50 = document.getElementById('form-50');


const answer50 = document.getElementById('answer-50');


form50.addEventListener('submit', (e) => {

    e.preventDefault();

    for (let i = 1; i < 100; i++) {

        if (i / 3 == 0 && i % 5 !== 0) {
            answer50.innerText += `Fizz \n`;
        }
        else if (i % 5 == 0 && i % 3 !== 0) {
            answer50.innerText += `Buzz \n`;
        }
        else if (i % 3 == 0 && i % 5 == 0) {
            answer50.innerText += `FizzBuzz \n`;
        }
    }

});

const form51 = document.getElementById('form-51');

const answer51 = document.getElementById('answer-51');


form51.addEventListener('submit', (e) => {
    e.preventDefault();

    let ans = findArmstrongNumbers();
    answer51.innerText = `The Armstrong numbers between 100 and 999 are: ${ans.join(', ')}`;
})




function findArmstrongNumbers() {
    let armstrongNumbers = [];

    for (let i = 100; i <= 999; i++) {
        if (isArmstrong(i)) {
            armstrongNumbers.push(i);
        }
    }

    return armstrongNumbers;
}

function isArmstrong(num) {
    let sum = 0;
    let temp = num;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit ** 3;
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

const form52 = document.getElementById('form-52');

const answer52 = document.getElementById('answer-52');


form52.addEventListener('submit', (e) => {

    e.preventDefault();

    let ans = sumMultiplesOf3And5();

    answer52.innerText = `The sum of all multiples of 3 and 5 below 1000 is: ${ans}`;



});

function sumMultiplesOf3And5() {
    let sum = 0;

    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}
const form53 = document.getElementById('form-53');
const obj = document.getElementById('input-53');
const answer53 = document.getElementById('answer-53');

form53.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("hi");
    let value = obj.value;
    let ans = checkArray(value);
    answer53.innerText = `The value is ${ans ? 'an array' : 'not an array'}`;
});

function checkArray(value) {
    try {
        let parsed = JSON.parse(value);
        return Array.isArray(parsed);
    } catch (error) {
        return false;
    }
}



const form54 = document.getElementById('form-54');
const obj54 = document.getElementById('input-54');
const answer54 = document.getElementById('answer-54');

form54.addEventListener('submit', (e) => {

    e.preventDefault();


    let value = obj54.value;

    let ans = checkArray(value);
    let cloned = [];
    if (ans) {
        cloned = JSON.parse(value);

        answer54.innerHTML = `your cloned value is [${cloned}]`;

    }
    else {
        answer54.innerText = 'Please enter a valid array';
    }

});


const form55 = document.getElementById('form-55');
const array55 = document.getElementById('input-55');
const number55 = document.getElementById('n-55');
const answer55 = document.getElementById('answer-55');

form55.addEventListener('submit', (e) => {

    e.preventDefault();

    let value = number55.value;

    let array = array55.value;

    let ans = [];

    if (checkArray(array)) {

        let arr = JSON.parse(array);
        console.log(arr);
        for (let i = 0; i < value && i < arr.length; i++) {

            ans.push(arr[i]);

        }

        console.log(ans);
        ans = JSON.stringify(ans);

        answer55.innerHTML = `here is the first ${value} value : ${ans}`;


    }
    else {
        answer55.innerText = 'Please enter a valid array';
        return;
    }




});


const form56 = document.getElementById('form-56');
const array56 = document.getElementById('input-56');
const number56 = document.getElementById('n-56');
const answer56 = document.getElementById('answer-56');

form56.addEventListener('submit', (e) => {

    e.preventDefault();

    let value = number56.value;

    let array = array56.value;

    let ans = [];
    console.log(value, array)
    if (checkArray(array)) {
        let arr = JSON.parse(array);

        for (let i = arr.length; i => value; i--) {
            ans.push(arr[i]);
        }
        console.log(ans);
        ans = JSON.stringify(ans);
        answer56.innerHTML = `here is the first ${value} value : ${ans}`;
    }
    else {
        answer56.innerText = 'Please enter a valid array';
        return;
    }




});


const form57 = document.getElementById('form-57');
const array57 = document.getElementById('input-57');
const answer57 = document.getElementById('answer-57');

form57.addEventListener('submit', (e) => {

    e.preventDefault();

    let array = array57.value;

    let ans = [];

    if (checkArray(array)) {

        array = JSON.parse(array);

        ans.push(array.join(' '));
        ans.push(array.join('+'));

        ans.push(array.join('-'));



    }
    else {
        answer57.innerText = 'Please enter a valid array';
        return;
    }


    // Join the ans array with line breaks
    ans = ans.join('\n\n');

    // Use <pre> tag to preserve formatting and line breaks
    answer57.innerHTML = `<pre>Your array is:\n\n\n${ans}</pre>`;

});



const form58 = document.getElementById('form-58');

const array58 = document.getElementById('input-58');

const answer58 = document.getElementById('answer-58');

form58.addEventListener('submit', (e) => {

    e.preventDefault();

    let array = array58.value;

    let ans = [];

    if (checkArray(array)) {

        array = JSON.parse(array);
        ans = array.sort((a, b) => a - b);
        console.log(ans);
        ans = ans.join(',');

        // Use <pre> tag to preserve formatting and line breaks
        answer58.innerHTML = `<pre>Your array is:\n\n\n${ans}</pre>`;


    }
    else {
        answer58.innerText = 'Please enter a valid array';
        return;
    }




});


const form59 = document.getElementById('form-59');

const array59 = document.getElementById('input-59');

const answer59 = document.getElementById('answer-59');

form59.addEventListener('submit', (e) => {


    e.preventDefault();


    let array = array59.value;

    let ans = [];

    if (checkArray(array)) {

        ans = findMostFrequent(array);

        answer59.innerHTML = ans;



    }
    else {
        answer59.innerText = 'Please enter a valid array';
        return;
    }

});

function findMostFrequent(arr) {
    let frequencyMap = {};

    for (let item of arr) {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    }

    let maxFrequency = 0;
    let mostFrequentItem;

    for (let item in frequencyMap) {
        if (frequencyMap[item] > maxFrequency) {
            maxFrequency = frequencyMap[item];
            mostFrequentItem = item;
        }
    }

    return `${mostFrequentItem} ( ${maxFrequency} times )`;
}


const form60 = document.getElementById('form-60');
const input60 = document.getElementById('input-60');
const answer60 = document.getElementById('answer-60');

form60.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputString = input60.value;
    const swappedString = swapCase(inputString);

    answer60.innerHTML = `<pre>${swappedString}</pre>`;
});

function swapCase(str) {
    return str.split('').map(char => {
        if (char === char.toLowerCase()) {
            return char.toUpperCase();
        } else {
            return char.toLowerCase();
        }
    }).join('');
}

const sampleArray = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

const printArrayButton = document.getElementById('print-array');
const answer61 = document.getElementById('answer-61');

printArrayButton.addEventListener('click', () => {
    answer61.innerHTML = ''; // Clear previous output
    let output = '';
    for (let i = 0; i < sampleArray.length; i++) {
        output += `row ${i}\n`;
        for (let j = 0; j < sampleArray[i].length; j++) {
            output += ` ${sampleArray[i][j]}\n`;
        }
    }
    answer61.textContent = output;
});

const form62 = document.getElementById('form-62');
const input62 = document.getElementById('input-62');
const answer62 = document.getElementById('answer-62');

form62.addEventListener('submit', (e) => {
    e.preventDefault();

    const vector = input62.value.split(',').map(Number);

    if (vector.some(isNaN)) {
        answer62.innerText = 'Please enter a valid numeric vector.';
        return;
    }

    const sumOfSquares = vector.reduce((sum, num) => sum + num * num, 0);

    answer62.innerHTML = `<pre>The sum of squares is: ${sumOfSquares}</pre>`;
});

const form63 = document.getElementById('form-63');
const input63 = document.getElementById('input-63');
const answer63 = document.getElementById('answer-63');

form63.addEventListener('submit', (e) => {
    e.preventDefault();

    const array = input63.value.split(',').map(Number);

    if (array.some(isNaN)) {
        answer63.innerText = 'Please enter a valid array of integers.';
        return;
    }

    const sum = array.reduce((acc, num) => acc + num, 0);
    const product = array.reduce((acc, num) => acc * num, 1);

    answer63.innerHTML = `<pre>Sum: ${sum}\n\n\nProduct: ${product}</pre>`;
});

const form64 = document.getElementById('form-64');
const input64 = document.getElementById('input-64');
const answer64 = document.getElementById('answer-64');

let array = [];

form64.addEventListener('submit', (e) => {
    e.preventDefault();

    const item = input64.value.trim();

    if (item) {
        array.push(item);
        input64.value = '';
    }

    answer64.innerHTML = `<pre>Array items:${array.join(', ')}</pre>`;
});

const form65 = document.getElementById('form-65');
const input65 = document.getElementById('input-65');
const answer65 = document.getElementById('answer-65');

form65.addEventListener('submit', (e) => {
    e.preventDefault();

    let array = input65.value.trim();

    if (isValidArray(array)) {
        array = JSON.parse(array);
        const uniqueArray = removeDuplicates(array);
        answer65.innerHTML = `<pre>Array without duplicates:\n\n\n${JSON.stringify(uniqueArray)}</pre>`;
    } else {
        answer65.innerText = 'Please enter a valid array in JSON format';
    }
});

function isValidArray(array) {
    try {
        array = JSON.parse(array);
        return Array.isArray(array);
    } catch (e) {
        return false;
    }
}

function removeDuplicates(array) {
    const lowerCaseSet = new Set();
    return array.filter(item => {
        const lowerCaseItem = typeof item === 'string' ? item.toLowerCase() : item;
        if (!lowerCaseSet.has(lowerCaseItem)) {
            lowerCaseSet.add(lowerCaseItem);
            return true;
        }
        return false;
    });
}

const form66 = document.getElementById('form-66');
const answer66 = document.getElementById('answer-66');

form66.addEventListener('submit', (e) => {
    e.preventDefault();

    const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
    const ordinals = ["th", "st", "nd", "rd"];

    const result = colors.map((color, index) => {
        let ord;
        const pos = index + 1;
        if (pos % 10 === 1 && pos !== 11) {
            ord = "st";
        } else if (pos % 10 === 2 && pos !== 12) {
            ord = "nd";
        } else if (pos % 10 === 3 && pos !== 13) {
            ord = "rd";
        } else {
            ord = "th";
        }
        return `${pos}${ord} choice is ${color}.`;
    }).join('\n');

    answer66.textContent = result;
});

const form67 = document.getElementById('form-67');
const answer67 = document.getElementById('answer-67');

form67.addEventListener('submit', function (e) {
    e.preventDefault();

    const startYear = parseInt(document.getElementById('start-year').value);
    const endYear = parseInt(document.getElementById('end-year').value);

    if (isNaN(startYear) || isNaN(endYear)) {
        answer67.textContent = "Please enter valid years.";
        return;
    }

    const leapYears = findLeapYears(startYear, endYear);
    answer67.textContent = `Leap years between ${startYear} and ${endYear} are:\n${leapYears.join(', ')}`;
});

function findLeapYears(startYear, endYear) {
    const leapYears = [];
    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYears.push(year);
        }
    }
    return leapYears;
}

const form68 = document.getElementById('form-68');
const inputArray68 = document.getElementById('input-array-68');
const answer68 = document.getElementById('answer-68');

form68.addEventListener('submit', function (e) {
    e.preventDefault();

    const arrayString = inputArray68.value.trim();
    if (!arrayString) {
        answer68.textContent = "Please enter an array.";
        return;
    }

    const originalArray = arrayString.split(',').map(item => item.trim());
    if (originalArray.length === 0 || (originalArray.length === 1 && originalArray[0] === "")) {
        answer68.textContent = "Please enter valid array elements.";
        return;
    }

    const shuffledArray = shuffleArray(originalArray);

    answer68.textContent = `Original Array: [${originalArray.join(', ')}]\nShuffled Array: [${shuffledArray.join(', ')}]`;
});

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
const form69 = document.getElementById('form-69');
const inputArray1 = document.getElementById('input-array1');
const inputArray2 = document.getElementById('input-array2');
const answer69 = document.getElementById('answer-69');

form69.addEventListener('submit', function (e) {
    e.preventDefault();

    const array1String = inputArray1.value.trim();
    const array2String = inputArray2.value.trim();

    if (!array1String || !array2String) {
        answer69.textContent = "Please enter both arrays.";
        return;
    }

    const array1 = array1String.split(',').map(item => parseInt(item.trim(), 10));
    const array2 = array2String.split(',').map(item => parseInt(item.trim(), 10));

    if (array1.length !== array2.length) {
        answer69.textContent = "Arrays must have the same length.";
        return;
    }

    const sumArray = computeSumOfArrays(array1, array2);

    answer69.textContent = `Array1: [${array1.join(', ')}]\nArray2: [${array2.join(', ')}]\nSum Array: [${sumArray.join(', ')}]`;
});

function computeSumOfArrays(arr1, arr2) {
    const sumArray = [];
    for (let i = 0; i < arr1.length; i++) {
        sumArray.push(arr1[i] + arr2[i]);
    }
    return sumArray;
}

const form70 = document.getElementById('form-70');
const inputArray70 = document.getElementById('input-array-70');
const inputShallow = document.getElementById('input-shallow');
const answer70 = document.getElementById('answer-70');

form70.addEventListener('submit', function (e) {
    e.preventDefault();

    const arrayString = inputArray70.value.trim();
    console.log(arrayString);
    if (!arrayString) {
        answer70.textContent = "Please enter an array.";
        return;
    }

    let array;
    console.log(
        JSON.parse(arrayString), "i"

    )
    try {
        array = JSON.parse(arrayString);
        if (!Array.isArray(array)) {
            throw new Error("Input is not a valid array.");
        }
    } catch (error) {
        answer70.textContent = "Please enter a valid array.";
        return;
    }

    const shallow = inputShallow.checked;
    const flattenedArray = array.flat(Infinity);

    answer70.textContent = `Original Array: ${JSON.stringify(array)}\nFlattened Array: ${JSON.stringify(flattenedArray)}`;
});

const form71 = document.getElementById('form-71');
const inputArray171 = document.getElementById('input-array171');
const inputArray271 = document.getElementById('input-array271');
const answer71 = document.getElementById('answer-71');

form71.addEventListener('submit', function (e) {
    e.preventDefault();

    const array1String = inputArray171.value.trim();
    const array2String = inputArray271.value.trim();

    if (!array1String || !array2String) {
        answer71.textContent = "Please enter both arrays.";
        return;
    }

    let array1, array2;
    try {
        array1 = JSON.parse(`[${array1String}]`);
        array2 = JSON.parse(`[${array2String}]`);
        if (!Array.isArray(array1) || !Array.isArray(array2)) {
            throw new Error("Input is not a valid array.");
        }
    } catch (error) {
        answer71.textContent = "Please enter valid arrays.";
        return;
    }

    const unionArray = computeUnion(array1, array2);

    answer71.textContent = `Array 1: [${array1.join(', ')}]\nArray 2: [${array2.join(', ')}]\nUnion: [${unionArray.join(', ')}]`;
});

function computeUnion(arr1, arr2) {
    const set = new Set([...arr1, ...arr2]);
    return Array.from(set);
}

const form72 = document.getElementById('form-72');
const inputArray72 = document.getElementById('input-array-72');
const answer72 = document.getElementById('answer-72');

form72.addEventListener('submit', function (e) {
    e.preventDefault();

    const arrayString = inputArray72.value.trim();

    if (!arrayString) {
        answer72.textContent = "Please enter an array.";
        return;
    }
    console.log(
        JSON.parse(arrayString)

    );

    let array;
    try {
        array = JSON.parse(arrayString);
        if (!Array.isArray(array)) {
            throw new Error("Input is not a valid array.");
        }
    } catch (error) {
        answer72.textContent = "Please enter valid array elements.";
        return;
    }

    const filteredArray = removeFalsyValues(array);

    answer72.textContent = `Original Array: [${array.join(', ')}]\nFiltered Array: [${filteredArray.join(', ')}]`;
});

function removeFalsyValues(arr) {
    return arr.filter(item => {
        return (
            item !== null &&
            item !== 0 &&
            item !== "" &&
            item !== false &&
            item !== undefined &&
            !(typeof item === 'number' && isNaN(item))
        );
    });
}



const form75 = document.getElementById('form-75');
const inputNumbers75 = document.getElementById('input-numbers75');
const inputTarget = document.getElementById('input-target');
const answer75 = document.getElementById('answer-75');

form75.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    const numbersInput = inputNumbers75.value.trim();
    const target = Number(inputTarget.value.trim());

    // Convert input string to array of numbers
    const numbers = numbersInput.split(',').map(num => parseInt(num.trim()));

    // Function to find all pairs of indices with given target sum
    const findAllPairs = (nums, target) => {
        const pairs = [];
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if (map.has(complement)) {
                map.get(complement).forEach(index => {
                    pairs.push([index, i]);
                });
            }
            if (!map.has(nums[i])) {
                map.set(nums[i], []);
            }
            map.get(nums[i]).push(i);
        }
        return pairs;
    };

    // Find all pairs of indices with target sum
    const pairs = findAllPairs(numbers, target);

    // Display result
    if (pairs.length > 0) {
        const resultString = pairs.map(pair => `[${pair.join(', ')}]`).join(', ');
        answer75.textContent = `Pairs of indices with the target sum ${target}: ${resultString}`;
    } else {
        answer75.textContent = `No pairs found with the target sum ${target}`;
    }
});

function num_string_range(start, end, step) {
    const result = [];
    if (typeof start === 'string' && typeof end === 'string' && start.length === 1 && end.length === 1) {
        start = start.charCodeAt(0);
        end = end.charCodeAt(0);
        for (let i = start; i <= end; i += step) {
            result.push(String.fromCharCode(i));
        }
    } else if (typeof start === 'number' && typeof end === 'number') {
        for (let i = start; i <= end; i += step) {
            result.push(i);
        }
    }
    return result;
}

const form76 = document.getElementById('form-range-76');
const resultDiv = document.getElementById('answer-76');

form76.addEventListener('submit', function (event) {
    event.preventDefault();

    const startValue = document.getElementById('start76').value.trim();
    const endValue = document.getElementById('end76').value.trim();
    const stepValue = parseInt(document.getElementById('step76').value);

    if (isNaN(stepValue) || stepValue <= 0) {
        resultDiv.textContent = "Step value must be a positive number.";
        return;
    }

    const result = num_string_range(startValue, endValue, stepValue);
    resultDiv.innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
});

const form77 = document.getElementById('form-77');
const inputArray77 = document.getElementById('input-array-77');
const elementToRemove = document.getElementById('element-to-remove');
const answer77 = document.getElementById('answer-77');

form77.addEventListener('submit', function (e) {
    e.preventDefault();

    const arrayString = inputArray77.value.trim();
    const element = elementToRemove.value.trim();

    if (!arrayString) {
        answer77.textContent = "Please enter an array.";
        return;
    }

    let array = arrayString.split(',').map(item => item.trim());

    if (!element) {
        answer77.textContent = "Please enter an element to remove.";
        return;
    }

    array = removeElementFromArray(array, element);

    answer77.textContent = `Updated Array: [${array.join(', ')}]`;
});

function removeElementFromArray(array, element) {
    return array.filter(item => item !== element);
}
const form78 = document.getElementById('form-78');
const inputArray78 = document.getElementById('input-array-78');
const nthLargest = document.getElementById('nth-largest');
const answer78 = document.getElementById('answer-78');

form78.addEventListener('submit', function (e) {
    e.preventDefault();

    const arrayString = inputArray78.value.trim();
    const n = parseInt(nthLargest.value.trim());

    if (!arrayString) {
        answer78.textContent = "Please enter an array.";
        return;
    }

    if (isNaN(n) || n <= 0) {
        answer78.textContent = "Please enter a valid number for n.";
        return;
    }

    let array = arrayString.split(',').map(item => parseInt(item.trim()));

    if (array.some(isNaN)) {
        answer78.textContent = "Please enter valid numeric array elements.";
        return;
    }

    const result = nthLargestElement(array, n);

    answer78.textContent = `The ${n}th largest element is: ${result}`;
});

function nthLargestElement(array, n) {
    array.sort((a, b) => b - a);
    return array[n - 1];
}

const form79 = document.getElementById('form-79');
const inputArray79 = document.getElementById('input-array-79');
const inputFrom79 = document.getElementById('input-from-79');
const inputTo79 = document.getElementById('input-to-79');
const answer79 = document.getElementById('answer-79');

form79.addEventListener('submit', function (e) {
    e.preventDefault();

    const arrayString = inputArray79.value.trim();
    const fromIndex = parseInt(inputFrom79.value);
    const toIndex = parseInt(inputTo79.value);

    if (!arrayString) {
        answer79.textContent = "Please enter an array.";
        return;
    }

    let originalArray = arrayString.split(',').map(item => item.trim());
    if (originalArray.length === 0 || (originalArray.length === 1 && originalArray[0] === "")) {
        answer79.textContent = "Please enter valid array elements.";
        return;
    }

    if (isNaN(fromIndex) || isNaN(toIndex) || fromIndex < 0 || toIndex < 0 || fromIndex >= originalArray.length || toIndex >= originalArray.length) {
        answer79.textContent = "Invalid from/to index. Please enter valid indices.";
        return;
    }

    const movedArray = moveElement(originalArray, fromIndex, toIndex);

    answer79.textContent = `Original Array: [${originalArray.join(', ')}]\nMoved Array: [${movedArray.join(', ')}]`;
});

function moveElement(array, fromIndex, toIndex) {
    const movedArray = [...array];
    const element = movedArray.splice(fromIndex, 1)[0];
    movedArray.splice(toIndex, 0, element);
    return movedArray;
}


const form80 = document.getElementById('form-80');
const inputDate80 = document.getElementById('input-date-80');
const answer80 = document.getElementById('answer-80');

form80.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputValue = inputDate80.value.trim();

    let parsedValue;
    try {
        console.log(parsedValue)// Use eval to parse the input as a Date or other value

        parsedValue = eval(inputValue);
        console.log(parsedValue)// Use eval to parse the input as a Date or other value
    } catch {
        answer80.textContent = "Invalid input.";
        return;
    }

    const isDate = is_date(parsedValue);

    answer80.textContent = `Input: ${inputValue}\nIs Date Object: ${isDate}`;
});

function is_date(input) {
    return Object.prototype.toString.call(input) === '[object Date]' && !isNaN(input.getTime());
}
const form81 = document.getElementById('form-81');
const inputSeparator81 = document.getElementById('input-separator-81');
const answer81 = document.getElementById('answer-81');

form81.addEventListener('submit', function (e) {
    e.preventDefault();

    const separator = inputSeparator81.value.trim();
    if (!separator) {
        answer81.textContent = "Please enter a separator.";
        return;
    }

    const currentDate = curday(separator);

    answer81.textContent = `Current Date: ${currentDate}`;
});

function curday(separator) {
    const date = new Date();

    console.log(date,)
    const day = String(date.getDate()).padStart(2, '0');

    console.log(day)
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${month}${separator}${day}${separator}${year}`;
}

const form82 = document.getElementById('form-82');
const inputMonth82 = document.getElementById('input-month-82');
const inputYear82 = document.getElementById('input-year-82');
const answer82 = document.getElementById('answer-82');

form82.addEventListener('submit', function (e) {
    e.preventDefault();

    const month = parseInt(inputMonth82.value);
    const year = parseInt(inputYear82.value);

    if (isNaN(month) || isNaN(year) || month < 1 || month > 12) {
        answer82.textContent = "Please enter a valid month (1-12) and year.";
        return;
    }

    const daysInMonth = getDaysInMonth(month, year);

    answer82.textContent = `Month: ${month}, Year: ${year}\nDays in Month: ${daysInMonth}`;
});

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

const form83 = document.getElementById('form-83');
const inputDate83 = document.getElementById('input-date-83');
const answer83 = document.getElementById('answer-83');

form83.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const dateString = inputDate83.value.trim(); // Get the date input
    const date = new Date(dateString);

    // Validate the date
    if (isNaN(date.getTime())) {
        answer83.textContent = "Please enter a valid date (MM/DD/YYYY).";
        return;
    }

    // Get the month name
    const monthName = month_name(date);

    // Display the result
    answer83.textContent = `Date: ${dateString}\nMonth Name: ${monthName}`;
});

// Function to get the month name from a date
function month_name(date) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[date.getMonth()];
}

const form84 = document.getElementById('form-84');
const inputDate1_84 = document.getElementById('input-date1-84');
const inputDate2_84 = document.getElementById('input-date2-84');
const answer84 = document.getElementById('answer-84');

form84.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const date1String = inputDate1_84.value.trim();
    const date2String = inputDate2_84.value.trim();
    const date1 = new Date(date1String);
    const date2 = new Date(date2String);

    // Validate the dates
    if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
        answer84.textContent = "Please enter valid dates (MM/DD/YYYY HH:MM).";
        return;
    }

    // Compare the dates
    const comparison = compare_dates(date1, date2);

    // Display the result
    answer84.textContent = `Date1: ${date1String}\nDate2: ${date2String}\nComparison: ${comparison}`;
});

// Function to compare dates
function compare_dates(date1, date2) {
    if (date1.getTime() === date2.getTime()) {
        return "Date1 = Date2";
    } else if (date1.getTime() > date2.getTime()) {
        return "Date1 > Date2";
    } else {
        return "Date2 > Date1";
    }
}
const form85 = document.getElementById('form-85');
const inputDate85 = document.getElementById('input-date-85');
const inputMinutes85 = document.getElementById('input-minutes-85');
const answer85 = document.getElementById('answer-85');

form85.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const dateString = inputDate85.value.trim();
    const minutesToAdd = parseInt(inputMinutes85.value);

    // Validate the inputs
    if (!dateString || isNaN(minutesToAdd)) {
        answer85.textContent = "Please enter valid date and minutes.";
        return;
    }

    const originalDate = new Date(dateString);
    if (isNaN(originalDate.getTime())) {
        answer85.textContent = "Please enter a valid date in YYYY-MM-DD HH:MM format.";
        return;
    }

    // Add minutes to the date
    const newDate = add_minutes(originalDate, minutesToAdd);

    // Display the result
    answer85.textContent = `Original Date: ${originalDate.toString()}\nNew Date after adding ${minutesToAdd} minutes: ${newDate.toString()}`;
});

// Function to add minutes to a Date object
function add_minutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
}


const form86 = document.getElementById('form-86');
const inputDate86 = document.getElementById('input-date-86');
const answer86 = document.getElementById('answer-86');

form86.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const dateString = inputDate86.value.trim();
    console.log(dateString);


    if (!dateString) {
        answer86.textContent = "Please enter a valid date (MMM DD, YYYY).";
        return;
    }


    const result = is_weekend(dateString);


    answer86.textContent = `Date: ${dateString}\nResult: ${result}`;
});


function is_weekend(dateString) {

    let date = new Date(`${dateString}`);

    const dayOfWeek = date.getDay();


    if (dayOfWeek === 6 || dayOfWeek === 0) {
        return "weekend";
    } else {
        return "Weekday";
    }
}

// Function 96: Get English ordinal suffix for the day of the month, 2 characters (st, nd, rd or th).
function english_ordinal_suffix(date) {
    const dayOfMonth = date.getDate();
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const relevantDigits = (dayOfMonth < 30) ? dayOfMonth % 20 : dayOfMonth % 30;
    const suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];
    return dayOfMonth + suffix;
}

// Function 97: Get ISO-8601 week number of year, weeks starting on Monday.
function ISO8601_week_no(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const diff = (date.getTime() - startOfYear.getTime()) / 86400000;
    return Math.ceil((diff + startOfYear.getDay() + 1) / 7);
}

// Function 98: Get a full textual representation of a month, such as January or June.
function full_month(date) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];
    return months[date.getMonth()];
}

// Function 99: Get a numeric representation of a month, with leading zeros (01 through 12).
function numeric_month(date) {
    return (date.getMonth() + 1).toString().padStart(2, '0');
}

// Function 100: Get a short textual representation of a month, three letters (Jan through Dec).
function short_months(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[date.getMonth()];
}

// Function 101: Get a full numeric representation of a year (4 digits).
function full_year(date) {
    return date.getFullYear();
}

// Function 102: Get a two digit representation of a year. Examples: 79 or 04.
function short_year(date) {
    return date.getFullYear().toString().slice(-2);
}

// Add event listeners to forms
document.getElementById('form-96').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputDate = new Date(document.getElementById('input-date-96').value);
    document.getElementById('answer-96').textContent = english_ordinal_suffix(inputDate);
});

document.getElementById('form-97').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputDate = new Date(document.getElementById('input-date-97').value);
    document.getElementById('answer-97').textContent = ISO8601_week_no(inputDate);
});

document.getElementById('form-98').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputDate = new Date(document.getElementById('input-date-98').value);
    document.getElementById('answer-98').textContent = full_month(inputDate);
});

document.getElementById('form-99').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputDate = new Date(document.getElementById('input-date-99').value);
    document.getElementById('answer-99').textContent = numeric_month(inputDate);
});

document.getElementById('form-100').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputDate = new Date(document.getElementById('input-date-100').value);
    document.getElementById('answer-100').textContent = short_months(inputDate);
});

document.getElementById('form-101').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputDate = new Date(document.getElementById('input-date-101').value);
    document.getElementById('answer-101').textContent = full_year(inputDate);
});

document.getElementById('form-102').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputDate = new Date(document.getElementById('input-date-102').value);
    document.getElementById('answer-102').textContent = short_year(inputDate);
});
// Function 103: Get 12-hour format of an hour with leading zeros.
function hours_with_zeroes(date) {
    return date.toLocaleString('en-US', { hour: 'numeric', hour12: true }).padStart(2, '0');
}

// Function 104: Get 24-hour format of an hour without leading zeros.
function hours_without_zeroes(date) {
    return date.getHours();
}

// Function 105: Get minutes with leading zeros (00 to 59).
function minutes_with_leading_zeros(date) {
    return date.getMinutes().toString().padStart(2, '0');
}

// Function 106: Get seconds with leading zeros (00 through 59).
function seconds_with_leading_zeros(date) {
    return date.getSeconds().toString().padStart(2, '0');
}

// Function 107: Get Timezone.
function timezone(date) {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

// Function 38: Find whether or not the date is in daylight savings time.
function daylights_savings(date) {
    return Number(date.getTimezoneOffset() < date.stdTimezoneOffset());
}

// Add event listeners to forms and buttons







document.getElementById('btn-107').addEventListener('click', function () {
    const currentDate = new Date();
    document.getElementById('answer-107').textContent = timezone(currentDate);
});



function timezone(date) {
    // Function to get the timezone name from the date object
    return date.toLocaleTimeString('en-us', { timeZoneName: 'long' }).split(' ')[2];
}

document.getElementById('btn-107').addEventListener('submit', function () {
    var dt = new Date();
    var tz = timezone(dt);
    document.getElementById('answer-107').textContent = tz;
});


const form = document.getElementById('form-108');

const inputValue108 = document.getElementById('input-108');


const answer108 = document.getElementById('answer-108');



form.addEventListener('submit', function (event) {


    event.preventDefault();

    let extracted_value = inputValue108.value;

    console.log(extracted_value, "extared value");

    console.log(typeof extracted_value);


    // Check if the input is a string
    const result = is_string(extracted_value);

    console.log(result)

    const template = "";
    answer108.innerText = is_string(extracted_value);

    // `input value is ${result ? "string" : "not a string"}`;


});

function is_string(input) {
    // nan
    // strin
    // undefined
    // 

    console.log("check nan", isNaN(input))
    if (isNaN(input)) {

        try {
            let temp = JSON.parse(input);

            console.log(temp, "temp")

            if (Array.isArray(temp)) {
                return `${input} is array`;
            }
            else if (typeof temp === 'object') {
                return `${input} is object`;
            }
            else {
                return `${input} is ${typeof temp}}`;

            }


        } catch (error) {

            if (input != undefined && input != null) {

                return ` ${input} is string    `;
            }
            else {
                return `${input} is undefined or null`;
            }



        }


    } else {
        return `${input} is number`;
    }




}


const form109 = document.getElementById('form-109');

const inputValue109 = document.getElementById('input-109');

const answer109 = document.getElementById('answer-109');


form109.addEventListener('submit', (e) => {
    e.preventDefault();

    let extracted_value = inputValue109.value;

    extracted_value = extracted_value.trim();

    if (extracted_value == '') {
        answer109.innerText = "true";
    }
    else {
        answer109.innerText = "false";
    }

})


const form110 = document.getElementById('form-110');

const inputValue110 = document.getElementById('input-110');

const answer110 = document.getElementById('answer-110');


form110.addEventListener('submit', (e) => {

    e.preventDefault();

    let extracted_value = inputValue110.value;


    let ans = extracted_value.split(" ");

    ans = JSON.stringify(ans);

    answer110.innerText = ans;




});
const form111 = document.getElementById('form-111');
const inputValue111 = document.getElementById('input-111');
const answer111 = document.getElementById('answer-111');

form111.addEventListener('submit', function (event) {
    event.preventDefault();
    let extracted_value = inputValue111.value;
    const result = abbrev_name(extracted_value);
    answer111.innerText = result;
});

function abbrev_name(input) {
    let names = input.split(' ');
    return names.length > 1 ? names[0] + ' ' + names[1].charAt(0) + '.' : input;
}

// Question 112
const form112 = document.getElementById('form-112');
const inputValue112 = document.getElementById('input-112');
const answer112 = document.getElementById('answer-112');

form112.addEventListener('submit', function (event) {
    event.preventDefault();
    let extracted_value = inputValue112.value;
    const result = protect_email(extracted_value);
    answer112.innerText = result;
});

function protect_email(email) {
    let parts = email.split('@');
    let name = parts[0];
    return name.substring(0, name.length / 2) + '...' + '@' + parts[1];
}

// Question 113
const form113 = document.getElementById('form-113');
const inputValue113 = document.getElementById('input-113');
const answer113 = document.getElementById('answer-113');

form113.addEventListener('submit', function (event) {
    event.preventDefault();
    let extracted_value = inputValue113.value;
    const result = string_parameterize(extracted_value);
    answer113.innerText = result;
});

function string_parameterize(input) {
    return input.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

// Question 114
const form114 = document.getElementById('form-114');
const inputValue114 = document.getElementById('input-114');
const answer114 = document.getElementById('answer-114');

form114.addEventListener('submit', function (event) {
    event.preventDefault();
    let extracted_value = inputValue114.value;
    const result = capitalize(extracted_value);
    answer114.innerText = result;
});

function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

// Question 115
const form115 = document.getElementById('form-115');
const inputValue115 = document.getElementById('input-115');
const answer115 = document.getElementById('answer-115');

form115.addEventListener('submit', function (event) {
    event.preventDefault();
    let extracted_value = inputValue115.value;
    const result = capitalize_Words(extracted_value);
    answer115.innerText = result;
});

function capitalize_Words(input) {
    return input.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Question 116
const form116 = document.getElementById('form-116');
const inputValue116 = document.getElementById('input-116');
const answer116 = document.getElementById('answer-116');

form116.addEventListener('submit', function (event) {
    event.preventDefault();
    let extracted_value = inputValue116.value;
    const result = swapcase(extracted_value);
    answer116.innerText = result;
});

function swapcase(input) {
    return input.split('').map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
}

const form117 = document.getElementById('form-117');
const inputValue117 = document.getElementById('input-117');
const answer117 = document.getElementById('answer-117');

form117.addEventListener('submit', function (event) {
    event.preventDefault();
    let extracted_value = inputValue117.value;
    const result = camelize(extracted_value);
    answer117.innerText = result;
});

function camelize(str) {
    return str.replace(/\W+(.)/g, function (match, chr) {
        return chr.toUpperCase();
    });
}

// Question 118
const form118 = document.getElementById('form-118');
const inputValue118 = document.getElementById('input-118');
const delimiter118 = document.getElementById('delimiter-118');
const answer118 = document.getElementById('answer-118');

form118.addEventListener('submit', function (event) {
    event.preventDefault();
    let extracted_value = inputValue118.value;
    let delimiter = delimiter118.value;
    const result = uncamelize(extracted_value, delimiter);
    answer118.innerText = result;
});

function uncamelize(str, delimiter = ' ') {
    return str.replace(/([a-z])([A-Z])/g, '$1' + delimiter + '$2').toLowerCase();
}

// Question 119
const form119 = document.getElementById('form-119');
const inputValue119 = document.getElementById('input-119');
const times119 = document.getElementById('times-119');
const answer119 = document.getElementById('answer-119');

form119.addEventListener('submit', function (event) {
    event.preventDefault();
    let extracted_value = inputValue119.value;
    let times = times119.value || 1;
    const result = repeat(extracted_value, times);
    answer119.innerText = result;
});

function repeat(str, times = 1) {
    return str.repeat(times);
}

// Question 120
const form120 = document.getElementById('form-120');
const mainString120 = document.getElementById('mainString-120');
const insertString120 = document.getElementById('insertString-120');
const position120 = document.getElementById('position-120');
const answer120 = document.getElementById('answer-120');

form120.addEventListener('submit', function (event) {
    event.preventDefault();
    let mainStr = mainString120.value;
    let insertStr = insertString120.value || '';
    let position = position120.value || 1;
    const result = insert(mainStr, insertStr, position);
    answer120.innerText = result;
});

function insert(mainStr, insertStr, position = 1) {
    return mainStr.slice(0, position) + insertStr + mainStr.slice(position);
}

const form121 = document.getElementById('form-121');
const inputValue121 = document.getElementById('input-121');
const length121 = document.getElementById('length-121');
const ending121 = document.getElementById('ending-121');
const answer121 = document.getElementById('answer-121');

form121.addEventListener('submit', function (event) {
    event.preventDefault();
    let extracted_value = inputValue121.value;
    let length = length121.value;
    let ending = ending121.value;
    const result = text_truncate(extracted_value, length, ending);
    answer121.innerText = result;
});

function text_truncate(str, length, ending) {
    if (length == null) {
        return str;
    }
    ending = ending || '...';
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
}

// Question 122
const form122 = document.getElementById('form-122');
const inputValue122 = document.getElementById('input-122');
const length122 = document.getElementById('length-122');
const answer122 = document.getElementById('answer-122');

form122.addEventListener('submit', function (event) {
    event.preventDefault();
    let extracted_value = inputValue122.value;
    let length = length122.value;
    const result = string_chop(extracted_value, length);
    answer122.innerText = JSON.stringify(result);
});

function string_chop(str, length) {
    if (length == null) {
        return [str];
    }
    let reg = new RegExp('.{1,' + length + '}', 'g');
    return str.match(reg);
}

// Question 123
const form123 = document.getElementById('form-123');
const mainString123 = document.getElementById('mainString-123');
const substring123 = document.getElementById('substring-123');
const caseSensitive123 = document.getElementById('caseSensitive-123');
const answer123 = document.getElementById('answer-123');

form123.addEventListener('submit', function (event) {
    event.preventDefault();
    let mainStr = mainString123.value;
    let subStr = substring123.value;
    let caseSensitive = caseSensitive123.checked;
    const result = count(mainStr, subStr, caseSensitive);
    answer123.innerText = result;
});

function count(mainStr, subStr, caseSensitive = true) {
    if (!caseSensitive) {
        mainStr = mainStr.toLowerCase();
        subStr = subStr.toLowerCase();
    }
    return mainStr.split(subStr).length - 1;
}

// Question 124
const form124 = document.getElementById('form-124');
const inputValue124 = document.getElementById('input-124');
const answer124 = document.getElementById('answer-124');

form124.addEventListener('submit', function (event) {
    event.preventDefault();
    let extracted_value = inputValue124.value;
    const result = escape_HTML(extracted_value);
    answer124.innerText = result;
});

function escape_HTML(str) {
    return str.replace(/[&<>"']/g, function (match) {
        const escape = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return escape[match];
    });
}
const form126 = document.getElementById('form-126');
const inputValue126 = document.getElementById('input-126');
const times126 = document.getElementById('times-126');
const answer126 = document.getElementById('answer-126');

form126.addEventListener('submit', function (event) {
    event.preventDefault();
    let extracted_value = inputValue126.value;
    let times = times126.value;
    const result = repeat_string(extracted_value, times);
    answer126.innerText = result;
});

function repeat_string(str, times = 1) {
    console.log(str, typeof str, "within")

    if (typeof str === "string") {
        return str.repeat(times);

    }


}

const form127 = document.getElementById('form-127');
const input127 = document.getElementById('input-127');
const search127 = document.getElementById('search-127');
const answer127 = document.getElementById('answer-127');

form127.addEventListener('submit', function (event) {
    event.preventDefault();
    let str = input127.value.trim();
    let searchStr = search127.value.trim();
    let result = remove_first_occurrence(str, searchStr);
    answer127.textContent = result;
});

function remove_first_occurrence(str, searchStr) {
    let index = str.indexOf(searchStr);
    if (index === -1) {
        return str;
    }
    return str.slice(0, index) + str.slice(index + searchStr.length);
}

// Function for question 128
const form128 = document.getElementById('form-128');
const input128 = document.getElementById('input-128');
const answer128 = document.getElementById('answer-128');

form128.addEventListener('submit', function (event) {
    event.preventDefault();
    let asciiStr = input128.value.trim();
    let result = ascii_to_hexa(asciiStr);
    answer128.textContent = result;
});

function ascii_to_hexa(str) {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
        let hexChar = str.charCodeAt(i).toString(16);
        hex += hexChar.length === 1 ? '0' + hexChar : hexChar;
    }
    return hex;
}

// Function for question 129
const form129 = document.getElementById('form-129');
const input129 = document.getElementById('input-129');
const answer129 = document.getElementById('answer-129');

form129.addEventListener('submit', function (event) {
    event.preventDefault();
    let hexStr = input129.value.trim();
    let result = hex_to_ascii(hexStr);
    answer129.textContent = result;
});

function hex_to_ascii(hexStr) {
    let str = '';
    for (let i = 0; i < hexStr.length; i += 2) {
        let hex = hexStr.substr(i, 2);
        let char = String.fromCharCode(parseInt(hex, 16));
        str += char;
    }
    return str;
}

// Function for question 130
const form130 = document.getElementById('form-130');
const inputStr130 = document.getElementById('input-str-130');
const word130 = document.getElementById('word-130');
const answer130 = document.getElementById('answer-130');

form130.addEventListener('submit', function (event) {
    event.preventDefault();
    let str = inputStr130.value.trim();
    let wordToFind = word130.value.trim();
    let result = search_word(str, wordToFind);
    answer130.textContent = result;
});

function search_word(str, word) {
    let count = 0;
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            count++;
        }
    }
    return `'${word}' was found ${count} times.`;
}

// Function for question 131
const form131 = document.getElementById('form-131');
const inputStr131 = document.getElementById('input-str-131');
const suffix131 = document.getElementById('suffix-131');
const answer131 = document.getElementById('answer-131');

form131.addEventListener('submit', function (event) {
    event.preventDefault();
    let str = inputStr131.value.trim();
    let suffix = suffix131.value.trim();
    let result = string_endsWith(str, suffix);
    answer131.textContent = result ? 'true' : 'false';
});

function string_endsWith(str, suffix) {
    return str.endsWith(suffix);
}

const form132 = document.getElementById('form-132');
const input132 = document.getElementById('input-132');
const answer132 = document.getElementById('answer-132');

form132.addEventListener('submit', function (event) {
    event.preventDefault();
    let str = input132.value.trim();
    let result = escape_html(str);
    answer132.textContent = result;
});

function escape_html(str) {
    return str.replace(/[&<>"']/g, function (match) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }[match];
    });
}

// Function for question 133
const form133 = document.getElementById('form-133');
const input133 = document.getElementById('input-133');
const answer133 = document.getElementById('answer-133');

form133.addEventListener('submit', function (event) {
    event.preventDefault();
    let str = input133.value.trim();
    let result = remove_non_ascii(str);
    answer133.textContent = result;
});

function remove_non_ascii(str) {
    return str.replace(/[^\x20-\x7E]/g, '');
}

// Function for question 134
const form134 = document.getElementById('form-134');
const input134 = document.getElementById('input-134');
const answer134 = document.getElementById('answer-134');

form134.addEventListener('submit', function (event) {
    event.preventDefault();
    let str = input134.value.trim();
    let result = remove_non_word(str);
    answer134.textContent = result;
});

function remove_non_word(str) {
    return str.replace(/[^\w\s-]/g, '');
}

// Function for question 135
const form135 = document.getElementById('form-135');
const input135 = document.getElementById('input-135');
const answer135 = document.getElementById('answer-135');

form135.addEventListener('submit', function (event) {
    event.preventDefault();
    let str = input135.value.trim();
    let result = sentenceCase(str);
    answer135.textContent = result;
});

function sentenceCase(str) {
    return str.toLowerCase().replace(/(^|\.\s+|\s+)\w/g, function (c) {
        return c.toUpperCase();
    });
}

// Function for question 136
const form136 = document.getElementById('form-136');
const input136 = document.getElementById('input-136');
const answer136 = document.getElementById('answer-136');

form136.addEventListener('submit', function (event) {
    event.preventDefault();
    let str = input136.value.trim();
    let result = strip_html_tags(str);
    answer136.textContent = result;
});

function strip_html_tags(str) {
    return str.replace(/<[^>]*>/g, '');
}

// Function for question 137
const form137 = document.getElementById('form-137');
const inputNum137 = document.getElementById('input-num-137');
const inputWidth137 = document.getElementById('input-width-137');
const inputSign137 = document.getElementById('input-sign-137');
const answer137 = document.getElementById('answer-137');

form137.addEventListener('submit', function (event) {
    event.preventDefault();
    let num = parseInt(inputNum137.value.trim());
    let width = parseInt(inputWidth137.value.trim());
    let sign = inputSign137.value.trim();
    let result = zeroFill(num, width, sign);
    answer137.textContent = result;
});

function zeroFill(num, width, sign = '') {
    let numStr = Math.abs(num).toString();
    while (numStr.length < width) {
        numStr = '0' + numStr;
    }
    if (num < 0) {
        numStr = sign + numStr;
    } else {
        numStr = (sign === '+' ? '+' : '') + numStr;
    }
    return numStr;
}

// Function for question 138
const form138 = document.getElementById('form-138');
const inputStr1138 = document.getElementById('input-str1-138');
const inputStr2138 = document.getElementById('input-str2-138');
const answer138 = document.getElementById('answer-138');

form138.addEventListener('submit', function (event) {
    event.preventDefault();
    let str1 = inputStr1138.value.trim();
    let str2 = inputStr2138.value.trim();
    let result = compare_strings(str1, str2);
    answer138.textContent = result ? 'true' : 'false';
});

function compare_strings(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}