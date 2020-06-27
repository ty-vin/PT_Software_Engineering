//Ty V. 
//Part II: JavaScript Reps

/*

////////////////////////////////
// Easy Going
////////////////////////////////

//Easy Going: Write a for loop that will log the numbers 1 through 20.


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

// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.


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

*/

/*

////////////////////////////////
// Wild Wild Life
////////////////////////////////


// Use the following arrays to answer the questions below (name, species ,age, hometown): 
// You should be modifying the elements by accessing them. It is up to you which methods to use.

// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.

// 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

// 3. Give D'Art a second hometown by adding "Hawkins"

// 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array 
//    and replace it with "Gameboy".

// const arrayName = [index0, index1, index2, index3, ...]
// const array = [name, species ,age, hometown] 

console.log('--')   //separates results of each activity in terminal

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.

const plantee = ["Plantee", "plant",  5000, "Mordor"]
plantee[2] = 5001;  // changes index2 (age)
console.log(plantee); // results: [ 'Plantee', 'plant', 5001, 'Mordor' ]


// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
wolfy.pop("Yukon Territory");   // remove index3 (hometown) "Yukon Territory"
wolfy.push("Gotham City");      // replace index3 with "Gothem City"
console.log(wolfy);             // results: [ 'Wolfy', 'wolf', 16, 'Gotham City' ]


// Give D'Art a second hometown by adding "Hawkins"

const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"]
dart[3] += " Hawkins";  // adds the word "Hawkins" to index3 (hometown), the last index
console.log(dart);      // Results: [ "D'Art", 'Demogorgan Dog', 2, 'Upside Down Hawkins' ]


// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and 
// replace it with "Gameboy".
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]

wolfy[0] = "Gameboy";
console.log(wolfy);

*/


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

// Use a " for of " loop (not a typo - try it out! Try a for of loop) to call .toUpperCase() on each of them 
// and print out the result.

 console.log('--')   //separates results of each activity in terminal

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
// Let 'ninja' represent the name of a ninjaTurtle in the array
for (let ninja of ninjaTurtles){        // A for loop that lets each ninja name of the ninjaTurtle array 
    console.log(ninja.toUpperCase());   // be converted to upper case letters with .toUpperCase method
}                                       // Results: DONATELLO
                                        //          LEONARDO
                                        //          RAPHAEL
                                        //          MICHAELANGELO



////////////////////////////////
// Methods, Revisited
////////////////////////////////

// console.log('--')   //separates results of each activity in terminal




////////////////////////////////
// Where is Waldo
////////////////////////////////

// console.log('--')   //separates results of each activity in terminal





////////////////////////////////
//  Excited Kitten
////////////////////////////////

// console.log('--')   //separates results of each activity in terminal




////////////////////////////////
//  Find the Median
////////////////////////////////

// console.log('--')   //separates results of each activity in terminal






