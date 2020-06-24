// Ty V.

/*

Loops - More Reps!
Pick five to tackle.

Create a loop that logs the numbers from 0-99 (ascending)
Create a loop that logs the numbers from 99-0 (descending)
Create a loop that logs the EVEN numbers from 0-98 (ascending)
Create a loop that logs the EVEN numbers from 98-0 (descending)
Create a loop that logs the ODD numbers from 0-99 (ascending)
Create a loop that logs the ODD numbers from 99-0 (descending)
Create a loop that logs the numbers from 49-72 (ascending)
Create a loop that logs the numbers from 81-26 (descending)
Create a loop that logs the numbers from 3-90 that are multiples of 3 (ascending)
🔴 Commit your work!
Your commit message should read something like:
"finished loop practice"

*/

// Create a loop that logs the numbers from 0-99 (ascending)

for(let i = 0; i <= 99; i++){  //interates from 0 to 99, adding one w/each interation
        console.log(i);
}
console.log('--');  //Separates the results of the code


// Create a loop that logs the numbers from 99-0 (descending)

for(let i = 99; i >= 0; i--){ //interates from 99 to 0, subtracting on w/each interation
        console.log(i);
}
console.log('--');  //Separates the results of the code


// Create a loop that logs the EVEN numbers from 0-98 (ascending)

for(let i = 0; i <= 98; i++){    // interates from 0 to 98, with a modulator condition that logs only
    if (i % 2 === 0){            // numbers with no remainder (even numbers)
        console.log(i);
    }
}

// Create a loop that logs the ODD numbers from 99-0 (descending)
console.log('--')   //Separates the results of the code

for(let i = 99; i >= 0; i--){   //Interates from 99 to 0, with modulator condition that logs only
    if (i % 2 === 1){           // numbers with a remainder (odd numbers)
        console.log(i);
    }
}

// Create a loop that logs the numbers from 49-72 (ascending)

console.log('--')   //Separates the results of the code

for(let i = 42; i <= 72; i++){
    console.log(i);
}




