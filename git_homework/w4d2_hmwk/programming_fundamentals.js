/*

Write a ~1 sentence summary for each one:

DRY - "Don’t repeat yourself" by avoiding repitition.

KISS - "Keep it simple, sweetie!" - Simpler code has fewer bugs and is easier to modify. 

Avoid creating a YAGNI - "You aren’t going to need it" - Only add what you need.

Do the simplest thing that could possibly work - Try to code the simplest thing that will work and build from there.

Don't make me think - Create code that is easy to unerstand with minimum effort.

Write code for the maintainer - Make the code easy for someone else to maintain in the future.

Single responsibility principle - Create a component of code that is responsibile and works for one function.

Avoid premature optimization - Only optimize when the code works.

Separation of concerns - Different areas of functionality should be managed by minimally overlappying mods of code.


Which ones surprise you (if any)?
    The single responsibility principle.

Which one is currently giving you the most struggle? I'm not really sure which is most troublesome. I'm still learning to code.

*/


const f = l => {                      // f is equal to the l parameter, which is passed to the function
    let es = 0, p = 0, c = 1, n = 0   // setting values equal to variables
    while (c <= l) {                 // start of while loop. While c <= l, the following will occur 
      n = c + p;                    // the value of n is equal to c + p
      [c, p] = [n, c]               // the array of c,p is equal to the array of n,c
      es += (c % 2 === 0) ? c : 0   // when es is equal to the modulation of c with remainder 0
    }                               // check to see if c is equal to 0 (with the ?)
    return es                       // and then return the value of c + es , if not, return 0 + es  
  }                                 
  
  // *Ternary operator <condition> ? <value1> : <value2>;
  // if the condition before the ? is met, return the value1 if not, then value2
 
   console.log(f(55))             // log function f which sets l equal to 55

   


  const f2 = (limit) => {  // declares the function and what it will call
    let evenSum = 0;       // declare the variable & values
    let previous = 0;      // declare the variable & values
    let current = 1;       // declare the variable & values
    while (current = limit) { //while loop that runs until the 'limit' is reached 
      let next = current + previous;  // declares the variable equal to sum of current and previous
             // console.log(next + ' next');
      previous = current;             // stores the current value into the previous variable
            // console.log(previous + ' previous');
      current = next;                 // stores the next value into the current variable
            // console.log(current + ' current');
      if (current % 2 === 0) {      // if statement that compiles if the current value is even ...
        evenSum += current;         //  then ... add the result of evenSum to current and store the value as evenSum
      }       // console.log(evenSum + ' evenSum');
              // console.log(current + ' new current');
    }
    return evenSum;                 // return or log the value stored in evenSum
  } 
  
console.log(f2(55);                //55 log the call to f2 function to compile for value 



/*

In keeping with one of our programming principals (write code for the maintainer): 
What would have been a more semantic name for this function (hint: this is a problem 
we had for either lab or hw and is considered a classic ) - are there any other 
variable names or things that would make this code easier to read and understand?

~ A more semantic name could have been 'evenNumberSum'
~ The 'let' delcarations are easier to understand than the previous example.

If you started a new job and your project was to expand the functionality of this function 
by allowing a second argument and then based on that second argument, returning the sum 
of even or odd numbers, which code would you rather start working with f or f2?
~ I would rather start with f2 because I can understand it better and we need to code
with future coder modifiers in mind.

Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. 
Remove this semi-colon! Run the code, is this semi-colon necessary?
~  The code did not compile successfully. The error was  "n = c + p        // the value of n is equal to c + p
SyntaxError: Invalid left-hand side in assignment." So, yes, the semi-colon is necessary.
*/

/*
// example of value changes over an iterartion
let b = 1; 
let c = 3;
for (let i = 0; i <= 1; i++ ) {
  a = b + c;
console.log (a); // logs 4 b/c a = 1+3
console.log('---');

b = c;
console.log(b);  // logs 3 b/c b is now 3, the value of c
console.log('---');

c = a;
console.log(c);   // logs 4 b/c a is 4 and now c is equal to 4
console.log('---');
} 
console.log('---'); 
console.log(a); // logs 7 b/c b = 3 and c = 4 from previous iteration -> a = 3 + 4 = 7
console.log('---');
//console.log(b); // logs 4 b/c b is now equal to c and  c = 4 
console.log('---');
//console.log(c); // logs 7 b/c  c now equals  a, and a = 7 so c = 7
*/