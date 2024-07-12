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
