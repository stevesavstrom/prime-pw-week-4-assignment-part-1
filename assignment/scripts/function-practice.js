console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
console.log('***** Problem #1 *****')

function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
console.log('***** Problem #2 *****')
function helloName( Steve ) {
  console.log('in helloName');
  return 'Hello, Steve';
}
// Remember to call the function to test
console.log('Test - should say "Hello, Steve":', helloName());

// 3. Function to add two numbers together & return the result
console.log('***** Problem #3 *****')

function addNumbers( firstNumber, secondNumber ) {
console.log('in addNumbers', firstNumber, secondNumber );  // return firstNumber + secondNumber;
let answer = firstNumber + secondNumber;
return answer;
}
console.log('Test - should say 14:', addNumbers(6,8));

// 4. Function to multiply three numbers & return the result
console.log('***** Problem #4 *****')

function multiplyThree ( firstNumber, secondNumber, thirdNumber ){
  console.log('in multiplyThree', firstNumber, secondNumber, thirdNumber);
  let answer = firstNumber * secondNumber * thirdNumber;
  return answer;
}
 console.log('Test - should say 162:', multiplyThree(3, 6, 9));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
console.log('***** Problem #5 *****')

function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else{
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );
console.log( 'isPositive - should say false', isPositive(-15) );
console.log( 'isPositive - should say true', isPositive(35) );

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
console.log('***** Problem #6 *****')

let teas = ['Green', 'Hibiscus', 'Oolong', 'Chamomile']
const lastItem = teas[teas.length - 1]

function getLast(){
    console.log('in getLast');
    const lastItem = teas[teas.length - 1]
    return lastItem;
}

console.log('Test - should say Chamomile:', getLast());

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
console.log('***** Problem #7 *****')

let array = [2, 12, -5, 93, 0, 113];

function find( value, array ){
  for (let i = 0; i < array.length; i++){
    if (array[i] === value){
    return true;
  }
}
    return false;
  }
  console.log( 'Test - should say true', find(93, array) );
  console.log( 'Test - should say false', find(100, array) );

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
console.log('***** Problem #8 *****')

function isFirstLetter(letter, string) {
if ( string[0] === letter){
  return true;
} else {
 return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
console.log('***** Problem #9 *****')

let numbers = [5, 20, 31];

function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  for(let i = 0; i < numbers.length; i++){
  sum += numbers[i];
}
  return sum;
}

console.log( 'Test - should say 56:', sumAll( numbers) );

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

// I used this an example: https://stackoverflow.com/questions/44950233/javascript-get-only-negative-numbers-form-array
console.log('***** Problem #10 *****')

let someNumbers = [17, -5, 0, 11, 2, -67, 8, 11, -24 ];
let otherNumbers = [-2, -13, -15, -36, -1];

function getPositives(array) {
    let positives = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positives.push(array[i]);
        }
    }
    return positives;
}

console.log( 'Test - should show array all positive numbers:', getPositives( someNumbers )); // Returns all positive numbers
console.log('Test - should show empty array:',getPositives( otherNumbers )); // Returns an empty array

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
console.log('***** Problem #10 *****')

// From Edabit: https://edabit.com/challenge/4gzDuDkompAqujpRi
// Add up the Numbers from a Single Number
// Create a function that takes a number as an argument.
// Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return
// 10 because 1 + 2 + 3 + 4 = 10.

function addTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log('Test - should say 15:', addTo(5) );
