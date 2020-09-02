
/*

~~~~~~~~  Section 3 Array Methods with Callbacks  ~~~~~~~~~~

A few array methods use callbacks. For example .map - .map takes each element of an array and does something to it and 
returns a new arrays.

But what should it do? Multiply everything by 5? Capitalize everything? If .map had a hard-coded thing it always 
did with an array, it wouldn't be very flexible.

By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some 
really powerful things.

Two arrays to work with:

*/


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']



// The first question is for the numbers array. The second question is for the words array.

// You don't have to write an answer to the thought questions.

// ------ ----- ----- Every: ------ ----- ----- 
// Determine if every number is greater than or equal to 0

const greaterThan = (num) => {              // function that when called, returns all numbers >= to 0 from nums array
    return (num >= 0)    
}                                           // from the nums array
  // console.log(nums.every(greaterThan));   // returns results off called function as true


// determine if every word is shorter than 8 characters
const panagramWord = (word) => {              // shortWord function that when called, returns every short word < 8 characters
    return (word.length < 8)                  // from the panagram array
}
 // console.log(panagram.every(panagramWord));   // logs results of every word in the array < 8 called using the function



// ------ ----- -----  Filter:  ------ ----- ----- 
// filter the array for numbers less than 4

const underFour = (num) => {               // function that calls the numbers of the array that are < than 4: 0, 1, 2, 3 via filter
    return (num < 4 )
}     
 // console.log(nums.filter(underFour));     // logs the filtered results of the number array


// filter words that have an even length
const anEvenLength = (word)  => {           // function to call the even words from the word array
    return (word.length % 2 === 0)          // logs word even word lengths:'over' and 'lazy'
}
 // console.log(panagram.filter(anEvenLength));




// ------ ----- -----  Find: ------ ----- ----- 
// Find the first value divisible by 5

const divFive = num => num % 5 === 0;
console.log(nums.find(divFive))                       // logs 5

// find the first word that is longer than 5 characters

const biggerThanFive = b => b.length > 5
console.log(panagram.find(biggerThanFive))          // logs undefined for all 5 or less than 

// ------ ----- -----  Find Index:  ------ ----- ----- 
// find the index of the first number that is divisible by 3

const divThree = num => num % 3 === 0
console.log(nums.findIndex(divThree))             // logs 2 using findIndex

// find the index of the first word that is less than 2 characters long
const underTwo = word => word.length < 2
console.log(panagram.findIndex(underTwo))        // logs  -1  for all 3 or greater


// ------ ----- -----   For Each:  ------ ----- ----- 
// console.log each value of the nums array multiplied by 3

nums.forEach(num => console.log(num * 3))    //uses forEach to log (3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 0)


// console.log each word with an exclamation point at the end of it   
panagram.forEach(word => console.log(word + '!'))   // uses forEach to log (The!, quick!, brown!, fox!, jumps!, over!, the!, lazy!, dog!)



// Thought Questions:

// What happened to the original array?  Unchanged


// Can you store the values from a forEach method in a new array? yes


// ------ ----- -----  Map:  ------ ----- ----- 
// make a new array of each number multiplied by 100

let newArryNums = []                            // declaration
newArryNums.push(nums.map(num => num * 100))
console.log(newArryNums)                        // logs the new array of numbers multiplied by 1oo (100, 200, 300, 400, 500 - 1000, 0)


// make a new array of all the words in all uppercase

let upper = []
upper.push(panagram.map(word => word.toUpperCase()))
console.log(upper)                                      // changes letters to uppercase logs uppercase of panagram array



// Thought Questions:
// What happened to the original array? nothing
 // console.log (panagram)

// Can you store the values from a map method in a new array? Yes


// ------ ----- -----   Some:  ------ ----- ----- 

// Find out if some numbers are divisible by 7

const divSeven = num => num % 7 === 0      //  looks for something divisible by 7
console.log(nums.some(divSeven))          // logs true b/c there are numbers / by 7


// Find out if some words have the letter a in them

const lettA = word => word.includes('a')        // look for words that 'a'
console.log(panagram.some(lettA))               // logs true: some words have letter 'a'
