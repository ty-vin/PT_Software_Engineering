
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
Your commit message should read something like:
"created hamster class"


***** Person
attributes:
name - set name from parameter in constructor method
age - initially 0
height - initially 0
weight - initially 0
mood - integer starting at 0 initially
hamsters - empty array initially
bankAccount - initially set to 0
methods:
getName() - returns name
getAge() - returns age
getWeight() - returns weight
greet() - logs a message with person's name
eat() - increment weight, increment mood ( if weight is currently 10 it should go up to 11 and same for mood)
exercise() - decrement weight ( if weight is currently 10 weight should change to 9)
ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())

~~~~~~~~~~~🔴 Commit your work!
Your commit message should read something like:
"created hamster class"


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
Your commit message should read something like:
"created timmys story"

*/