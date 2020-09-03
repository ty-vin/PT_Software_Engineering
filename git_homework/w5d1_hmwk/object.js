
/*

********* Getting Started ************
Make a file inside today's homework folder called objects.js and do the first few sections up until the Daring Adventure in this file
Creating Classes

Hamster
attributes:
owner - string, initially set as an empty string
name - string, set the name from parameter in constructor method
price - integer, set as 15

methods:
wheelRun() - log "squeak squeak"
eatFood() - log "nibble nibble"
getPrice() - return the price

~~~~~~~~~~~~ 🔴 Commit your work!
Your commit message should read something like: "created hamster class"

*/


class Hamster {                             // hamster class
    constructor(name){                      
        this.owner = '',                    // owner - string, initially set as an empty string
        this.name = name,                   // name - string, set the name from parameter in constructor method
        this.price = 15                     // price - integer, set as 15
    }

    wheelRun(){                             // wheelRun() - log "squeak squeak"
        console.log("squeak, squeak")
    }

    eatFood(){                              // eatFood() - log "nibble nibble"
        console.log("nibble, nibble")
    }

    getPrice(){
        return price                        // getPrice() - return the price
    }
}



/*

***** Person
-- attributes:
name - set name from parameter in constructor method
age - initially 0
height - initially 0
weight - initially 0
mood - integer starting at 0 initially
hamsters - empty array initially
bankAccount - initially set to 0

-- methods:
getName() - returns name
getAge() - returns age
getWeight() - returns weight
greet() - logs a message with person's name
eat() - increment weight, increment mood ( if weight is currently 10 it should go up to 11 and same for mood)
exercise() - decrement weight ( if weight is currently 10 weight should change to 9)
ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, 
decrement bankAccount by the value of the hamster (hint: use getPrice())

~~~~~~~~~~~🔴 Commit your work!
Your commit message should read something like: "created hamster class"

*/

class Person {
    constructor(name){
        this.name = name,       // name - set name from parameter in constructor method 
        this.age = 0,           // age - initially 0
        this.height = 0,        // height - initially 0
        this.weight = 0,        // weight - initially 0
        this.mood = 0,          // mood - integer starting at 0 initially
        this.hamsters = [],     // hamsters - empty array initially
        this.bankAccount = 0    // bankAccount - initially set to 0
    }
    getName(){
        return this.name;       // getName() - returns name
    }

    getAge(){
        return this.age;        // getAge() - returns age
    }

    getWeight(){
        return this.weight;     // getWeight() - returns weight
    }

    greet(){
        return "Hi,  " + this.name;         // greet() - logs a message with person's name
    }

    eat(){                    // eat() - increment weight, increment mood ( if weight is currently 10 it should go up to 11 and same for mood)
        if(this.weight < 10){
            this.weight +=1;
            this.mood +=1;
        }
    } 

    exercise(){         // exercise() - decrement weight ( if weight is currently 10 weight should change to 9)
        if(this.weight === 10){
            this.weight -=1;
        }
    }

    ageUp(){                // ageUp() 
        this.age++;         // increment age
        this.height++;      // increment height
        this.weight++;      // increment weight
        this.mood--;        // decrement mood
        this.bankAccount +=10;  // increment bank account by 10 
    }

    buyHamster(hamster){                        
        this.hamsters.push(hamster);         // buyHamster(hamster) - push the hamster object onto the hamster array,   
        this.mood +=10;                      // increment mood by 10,
        this.bankAccount - this.getPrice();  // decrement bankAccount by the value of the hamster (hint: use getPrice())
    }
}




/*

********* Create a Story with your Person class ***********

Feel free to update or add methods to automate some of these tasks.

Instantiate a new Person named Timmy
Age Timmy five years
At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
Age Timmy 9 years
Create a hamster named "Gus"
Set Gus's owner to the string "Timmy"
Have Timmy "buy" Gus
Age Timmy 15 years
Have Timmy eat twice
Have Timmy exercise twice

~~~~~~~~🔴 Commit your work!
Your commit message should read something like: "created timmys story"

*/


const timmy = new Person("Timmy");      // Instantiate a new Person named Timmy
timmy.age = 5;                          // Age Timmy five years

for (i = 0; i < 5; i++) {               // Have him eat five times.
    timmy.eat(i);
}

for (i = 0; i < 5; i++) {               // Have him exercise five times.
    timmy.exercise(i);
}

for (i = 0; i < 9; i++) {               // Age Timmy 9 years
    timmy.ageInc(i);
}


const gus = new Hamster('Gus');         // Create a hamster named "Gus"
gus.owner = 'Timmy';                    // Set Gus's owner to the string "Timmy"

timmy.buyHamster()                      // Have Timmy "buy" Gus
for (i = 0; i < 15; i ++) {             // Age Timmy 15 years
    timmy.ageInc();
}

for (i = 0; i < 2; i ++) {
    timmy.eat();                        // Have Timmy eat twice
    timmy.exercise();                   // Have Timmy exercise twice
}

cconsole.log(timmy);
console.log(gus);


