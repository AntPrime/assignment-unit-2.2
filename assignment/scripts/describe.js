// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct.
// Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// DESCRIBE the code as it would be run, then let us know what the OUTCOME of the
// console.log statement will be.


// 0. (EXAMPLE!)
// DESCRIPTION:
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. If it is,
// 'yes' will be console.logged.
// OUTCOME:
// 'yes' is what is logged.

// CODE:
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //


// 1.
// DESCRIPTION
// Create a variable called 'name' and set it to the value of 'Dane'. Create a conditional:
// if the value of name is equal to 'Mary', set the value to 'Hi, Mary!'
// if the name is not Mary, set the value to 'How do you do?'
// check if the value is 'Hi Mary!' or 'How do you do?'
// OUTCOME:
//'How do you do?' is logged

// CODE:
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 2.
// DESCRIPTION:
// Create two variables - first variable is called 'secret'. 
// Second variable called code and assign it to the value of 123. Create a conditional: 
// if the value of 'code' is equal to 123, 'secret' equals 'super', and code equals itself times two. 
// if 'code' equals more than 250, 'secret' equals 'duper'.
// check what the value of secret is
// OUTCOME: 'Super' is logged in the console, after renaming code to 'super', code would equal 246 which is less than 250.
//

// CODE:
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 3.
// DESCRIPTION
// create three variables - 'isStudent' equals true, 'age' equals 34, and 'zip' equals 55407.
// Create a conditional that covers the following: if 'isStudent' equals true and zip is more than 80000, console log 'You are a student on the West Coast!'
// if 'isStudent' equals false or 'age' is more than 30, console log 'What are your hobbies?'
// if 'isStudent equals true, console log 'Welcome to Prime!', If it is not any of the conditionals, console log 'How about the weather?'.
// OUTCOME: Console log shows 'Welcome to Prime!'
//

// CODE:
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //


// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// 0. (EXAMPLE!)
// DESCRIPTION:
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

// CODE:
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 4. 
// DESCRIPTION:
// We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// CODE:
/*
let colorOne = 'red';
let colorTwo = 'blue';
// FIX - the value of color0ne and colorTwo are swapped. color0ne needs to be set to 'blue' and colorTwo needs to be set to 'red'.
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
//Updated Fix -  if mix === True, colorOne AND colorTwo need to be set to purple. colorTwo is missing the assignment of 'Purple', considering mix = true.
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 5.
// DESCRIPTION:
// We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// CODE:
/*
let temp = 40;
const time = 4;
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
  // Updated fix - in the if statement, it currently has if temp is more than 30 OR  time is more than or equal to 4. Correction should so that instead of || it should be AND or &&. 
*/

// ------------------------------------------------------------ //
// ------------------------------------------------------------ //

// 6.
// DESCRIPTION:
// We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.
  
// CODE:
/*
let age = 21;
const minAge = 21;
// FIX -  'age' should be listed first in the if statement, to check if 'age' is greater than or equal to 'minAge'. If 'age' is equal or more than 'minAge', it should log 'enter' instead of 'no entry'. \
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
