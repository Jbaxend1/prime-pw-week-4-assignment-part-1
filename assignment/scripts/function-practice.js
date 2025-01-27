console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'

function helloName( name ) {
  return 'Hello, ' + name;
}

// Remember to call the function to test

console.log( helloName('Joe'));
console.log( helloName('Sue'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  // let answer = firstNumber + secondNumber;
  // return answer;
  return firstNumber + secondNumber;
}

console.log(addNumbers(3, 10));


// 4. Function to multiply three numbers & return the result
function multiplyThree( x, y, z){
  let answer = x * y * z;
  return answer;
}

console.log(multiplyThree(4, 5, 3));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
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


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let car = [];
let carInventory = [4, 63, 23, 6];

function getLast(array){
  if(array.length > 0){
  let lasItem = array.pop();
  return lasItem;
  }
  else if(array.length == 0){
    return 'Undefined!';
  }
}

console.log(getLast(car));
console.log(getLast(carInventory));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

let classicCars = ['Corvette', 'Camaro', 'Bronco', 'Lambo']

function find( value, array ){
  let status = 'False'

    for(let i=0; i<array.length; i++){
      let name = array[i];
        if(name == value){
          status = 'True';
          break;
        }
    }
  return status;
}

console.log(find('Mustang', classicCars));
console.log(find('Corvette', classicCars));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

/**
 * What is it doing? - check if input letter is the starting letter of string.
 * 
 * @param {string} - input a letter and string value.
 * 
 * @return - True or false
 * 
 */


function isFirstLetter(letter, string) {
  let status = 'False';

    for(let i=0; i<string.length; i++){
      let character = string[i];
        if(character == letter){
          status = 'True';
          break;
        }
    }
  return status;
}

console.log(isFirstLetter('T', 'Stegosaurus'));
console.log(isFirstLetter('T', 'T-rex'));
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let beans = [9, 25, 45, 88, 100];

function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
    for(let i=0; i<array.length; i++){
      sum += array[i];
    }
  return sum;
}

console.log('The sum of all the Beans is:', sumAll(beans));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

/**
 * What it does? - produce a new array of positive numbers and if there are no positive numbers output an empty array
 * 
 * @param {array}
 * 
 * @return - new array with positive numbers or otherwise empty.
 * 
 */

let branch = [-15, 56, -89, 77,];
let temps = [-48, -89, -25]

function allGood(array){
  let newArray = [];

    for(let i=0; i<array.length; i++){
      let num = array[i];
        if(num > 0){
          newArray.push(num);
        }
    }
  return newArray;
}
console.log(allGood(branch));
console.log(allGood(temps));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// "This code does not execute properly. Try to figure out why."

function multiply(a, b){
  // There is no return declared
   return a * b;
} // end of multiply function

// log to check if it works
console.log(multiply(4,4));