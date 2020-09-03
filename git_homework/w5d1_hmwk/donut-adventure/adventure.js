

/*

********* Daring Adventure! - Getting Started *************
Inside today's homework folder, create a folder called donut_adventure
Navigate inside the donut_adventure folder and create an index.html and adventure.js file.
Connect the files and for the rest of this homework, work in the adventure.js file. 
Confirm that you've successfully connected your files by console logging something and checking your browser developer tools console!

************** The Adventure of Dougie the Donut on the Streets of NYC.  ******************
Dougie is a funky fresh donut who has decided to walk his way from the Flat Iron District to Times Square where he wants to show off his sweet moves.
Along the way, Dougie is approached by his arch nemesis Pizza Rat. Sometimes they fight, sometimes they just talk smack at each other. 
Anyway that it goes, let's try to get Dougie safely to Times Square!
For this section of the homework, you'll be making two objects that will interact. First we will create a Hero class, then an Enemy class, 
and instantiate our two objects from those classes.

********* Our Hero ************
Let's create our Hero class!

Attributes:
name: set name from parameter in constructor method
health: initially 100
weapons: use the following object
{
    sprinkleSpray: 5,
    sugarShock: 10
}
catchPhrases: use the following array
['i\'m fresher than day old pizza', 
 'you can\'t count my calories']

------- Methods:
talkSass: logs one of his catchphrases randomly
announceHealth: logs his current health
fight: for now, logs 'i\'m ready to rumble'
Now, using this Hero class, create an instance of our hero Dougie the donut.

~~~~~~~~~~~ 🔴 Commit your work!
Your commit message should read something like: "created our hero dougie" 

*/






/*

************* Our Enemy ************* 
Now let's create our Enemy class!

Attributes:
name: set name from parameter in constructor method
health: initially 100
weapons: use the following object
{
    pepperoniStars: 5,
    cheeseGrease: 10    
}
catchPhrases:
['i\'m youtube famous',
'i\'m more dangerous than an uncovered sewer']

---- Methods:
talkSmack: logs one of his catchphrases randomly
announceHealth: logs his current health
fight: for now, logs i\'m gonna flatten you like a slice of pepperoni!
Now, using this Enemy class, create an instance of the enemy Pizza Rat.


🔴 Commit your work!
Your commit message should read something like: "created our enemy pizza rat"
*/






/*
*********** Walking Down the Street **************
Now, let's write their story! Dougie is walking down Flat Iron -- but oh no! He runs into Pizza rat!

Have Dougie talkSass
Have Pizza Rat talkSmack
Have Dougie announceHealth
Have Pizza Rat announceHealth


************ Fight! ******************
Things have escalated between Dougie and Pizza Rat!

Upgrade their fight methods so that it accesses one of their weapons and console log its hitpoints.
Keep upgrading this fight method to accept an argument called enemy so that when you call on the fight method you can pass in the entire Dougie or Pizza Rat object as the parameter. (i.e. dougie.fight(pizzaRat))
Now that we are able to pass in Dougie or Pizza Rat as an object, we can make it so that our fight method subtracts from their health.
Using the hitpoints from the weapon they're using, subtract that amount from the enemy's health (i.e. If Dougie fights Pizza Rat using sprinkleSpray, subtract sprinkleSpray's hitpoint value (5) from Pizza Rat's health)
Console log the enemy name and their new health value (i.e. 'Dougie got hit by pepperoniStars! His health is now at 95!')

*************** Now, they can fight!  ********************

Have Pizza Rat fight Dougie
Have Dougie fight Pizza Rat
Have Pizza Rat and Dougie both announceHealth to make sure their health has decreased!
~~~~~~~~~🔴 Commit your work!
Your commit message should read something like: "dougie and pizza rat have fought"

*/




