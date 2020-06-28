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

/*

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

*/

////////////////////////////////
// Methods, Revisited
////////////////////////////////


// console.log('--')   //separates results of each activity in terminal

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 
'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 
'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 
'Snatch', 'Fast and Furious'];

// 1. Console log: the index of Titanic

console.log(favMovies.indexOf('Titanic'));  // .indexOf() returns the number of the element in the array, favMovies
                                            // Result: 8

// Do the following and console.log the final results (I have included some thought questions, 
// you don't have to write out an answer for those marked as such):
// Note: if you have to add to the array, feel free to add any movie you'd like

// 2. use the .sort method 

const favMoviesSorted = favMovies.sort();  //create a new constant for the sorted array to prevent permanent
                                          // changes to the original array 
// console.log(favMoviesSorted);      // verified code

//  --- Thought question: what did this do to the array? Did it permanently alter it?
// The .sort() method sorts the array into alphabetical or numerical order. Yes, it permanantly changes it,
// unless you create a new constant that can be sorted in place of the original array.


// 3. Use the .pop method

favMoviesSorted.pop();   // the .pop method removes the last object in the array (Volver)
                        // every movie in our favMoviesSorted array is there except Volver.
//  console.log(favMoviesSorted);        //verified code; sorted alaphabetically 


// 4. push "Guardians of the Galaxy"

favMoviesSorted.push("Guardians of the Galaxy");   // pushes "Gardians of the Galaxy" into the last index position
                                        // of this array
//  console.log(favMoviesSorted);   //verified code; "Guardians of the Galaxy" at end of array


// 5. Reverse the array

favMoviesSorted.reverse();      // Reverses the elements in the favMoviesSorted array.
console.log(favMoviesSorted);     //verified code; "Guardians of the Galaxy" = index0; Black Panther = index19



// 6. Use the .shift method to remove "Fast and Furious"

// .shift removes the 1st index,(0), of an array.  Since "Fast and Furious" is not in the 1st position, use .splice.
            // array.splice(index position desired, howmany removed, item1, ....., itemX)
            // array.splice (index = position in the array of addition, # added or removed, item(s)+ or -)

            // console.log(favMoviesSorted[14]);  // verified position of Fast and Furious in array
 favMoviesSorted.splice(14, 1);  // spiced (the index, # to be removed); no additions so last part blank
// console.log(favMoviesSorted);   // verifiying Fast & Furious removed



// 7. Use the .unshift - what does it return?

favMoviesSorted.unshift();   // returns the same thing as code above
// console.log(favMoviesSorted);  // verified code works


// 8. .splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of 
// counting it yourself) 

// console.log(favMovies.indexOf("Django Unchained"));  //determines index of Django Unchained; [14]
                                             //  Removes elements from an array and, if necessary, inserts new 
favMoviesSorted.splice(14, 1, "Avatar");     // elements in their place, returning the deleted elements.
// console.log(favMoviesSorted);           // verified code works


// -----Thought question: did this permanently alter our array?
// Yes.


// 9. .slice the last half of the array (challenge yourself and try to programmatically determine 
//the middle of the array rather than counting it and hard coding it) 
//console.log(Math.ceil(favMoviesSorted.length/2)); // find the midpoint using Math.ceil and length commands
                        // Verified = 9  [17 values long; 17/2 = 8.5 rounded up = 9]

favMoviesSorted.slice(9, 17);  // array.slice(start, end).  .slice()returns a section of an array.
// console.log(favMoviesSorted.slice(9, 17)); //   tests the code. Results: last part of the array in terminal.

// ---- Thought question: did this permanently alter our array?
// No. 


// 10. store the value of your slice in a variable, console.log it 
// - Thought question: what is going on here?  Storing my sliced array as a variable and consoling it

let f = favMoviesSorted.slice(9, 17);
// console.log(f);   //verifies code works


// 11. console.log your final results
console.log(f);     //  'Imitation of Life', "Howl's Moving Castle", 'Harry Potter','Harry Potter',
                    // 'Fried Green Tomatoes', 'Avatar', 'Conan the Barbarian', 'Cloud Atlas'

console.log(favMoviesSorted);  // the original array is unaltered


////////////////////////////////
// Where is Waldo
////////////////////////////////



//  console.log('--')   //separates results of each activity in terminal





////////////////////////////////
//  Excited Kitten
////////////////////////////////

// console.log('--')   //separates results of each activity in terminal






////////////////////////////////
//  Find the Median
////////////////////////////////

// console.log('--')   //separates results of each activity in terminal






