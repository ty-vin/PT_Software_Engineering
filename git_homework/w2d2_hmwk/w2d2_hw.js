//Ty V 
//Part II: JavaScript Reps

////////////////////////////////
// Easy Going
////////////////////////////////

//Easy Going: Write a for loop that will log the numbers 1 through 20.

//start point of the for loop

for (let i = 1; i <= 20; i++) {  // Interates from 1 to 20, increasing by 1 each interation
                            
    console.log(i);  //logs 1-20 in terminal
}


////////////////////////////////
// Get Even
////////////////////////////////
// Write a for loop that will log only the even numbers in 0 through 200.

console.log('--')   //separates results of for loops in terminal

for(let i = 0; i <= 200; i++)   // Interates from 0 to 200 increasing by value of 1
{                               // If condition: uses modulator (%) to see if remainder - if not 
   if (i % 2 === 0){            // will log only the even numbers
    console.log(i);
   }
}


////////////////////////////////
// Fizz Buzz
////////////////////////////////

/*

Write a javascript application that logs all numbers from 1 - 100.
If a number is divisible by 3 log "Fizz" instead of the number.
If a number is divisible by 5 log "Buzz" instead of the number.
If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

*/

console.log('--')   //separates results of for loops in terminal

for (let i = 1; i <= 100; i++) {  // Interates the code to increase number by one until it reaches 100
    let answer = "";            // allows the answer to be whatever is in the string
    
    if( i % 3 == 0 ) {          // If a number is divisible by 3, add "Fizz" to the string instead of the number.
        answer += "Fizz"; }
    
    if( i % 5 == 0 ) {         // If a number is divisible by 5, add "Buzz" to the string instead of the number.
        answer += "Buzz"; }

    if(answer == "") {         // If there is no string answer, it will be logged as a number that is
        answer = i; }          // nondivisible by 3 or 5

    console.log(answer);      // Logs the answer of the if interation in terminal 
}


////////////////////////////////
// Wild Wild Life
////////////////////////////////

console.log('--')   //separates results of for loops in terminal




////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

console.log('--')   //separates results of for loops in terminal




////////////////////////////////
// Methods, Revisited
////////////////////////////////

console.log('--')   //separates results of for loops in terminal




////////////////////////////////
// Where is Waldo
////////////////////////////////

console.log('--')   //separates results of for loops in terminal



////////////////////////////////
//  Excited Kitten
////////////////////////////////

console.log('--')   //separates results of for loops in terminal




////////////////////////////////
//  Find the Median
////////////////////////////////

console.log('--')   //separates results of for loops in terminal






