//
/*

/////  Datatypes Refresher  /////

Answer the Following
For each of the following, write which datatypes you would use to represent the data, and then give a
small example of the data structure. [ Strings - Numbers - Booleans - Arrays - Objects ]

e.g. A computer that can be either on or off. 
=> datatype: boolean 
=> data structure example: const computer = true; 

1) A light switch that can be either on or off.
    => datatype: boolean
    => exp: const lSwitch = true;

2) A user's email address.
    => datatype: string
    => exp: const tkEmail = "t.K123@anywhere.orangemail.com"

3) A spaceship with a hull, laser blasters, tractor beam, and warp drive.
    => datatype: object
    => exp: const spaceShip = {
        hull: 'heatproof titanium',
        laser blasters: 5000,
        tractor beam: 1525,
        warp drive: true,
    }

4) A list of student names from our class.
    => datatype: array
    => exp:  const studentNames =['Rob', 'Bruce', 'Kimmy', 'Sarah']

5) A list of student names from our class, each with a location.
    => datatype: array of object(s)
    => exp: const studNameLoc = [
        {name: 'Robert', location: 'Town1' },
        {name: 'Bruce', location: 'Town2' },
        {name: 'Kimmy', location: 'Town3' },
        {name: 'Sarah', location: 'Town4' }
    ];

6) A list of student names from our class, each with a location and each with a list of favorite tv shows.
    => datatype: array of object(s) and with an object that has an array
    => exp: const studNameLocShow = [
        {name: 'Robert', location: 'Town1', 'favorite tv shows': ['Show A', 'Show B'] },
        {name: 'Bruce', location: 'Town2', 'favorite tv shows': ['Show C', 'Show D'] },
        {name: 'Kimmy', location: 'Town3', 'favorite tv shows': ['Show B', 'Show E'] },
        {name: 'Sarah', location: 'Town4', 'favorite tv shows': ['Show G', 'Show A'] }
    ];
    

*/



/////  Take it Easy  /////

// 1) Make an array that holds all of the colors of the rainbow.

const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indego', 'violet'];


// 2) Write code that will access "blue" from the rainbow array.

console.log(rainbowColors[4]);  // logs blue (the 4th element) from the array 



// 3) Make an object that is called your name and holds the information about your favorite food, a hobby, 
// the name of the town that you live in currently, and your favorite datatype.

const tV = {
    name: 'Ty',
    favFood: 'berries',
    hobby: 'reading',
    currrentloc: 'school',
    favDatatype: 'Boolean'
};



// 4) Write code that will access your hobby from the object that you just created.

console.log(tV.hobby);  // call the hobby element from the object

// 5) Commit message: "took it easy"





/////   Crazy Object!  /////



const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "some women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

/*
// Use crazy Object to log the following.


// 1)  "omg my mouth is burning"

console.log(crazyObject.taco[1].salsa[5]); // call the taco object and the salsa object from the array

// 2) "Pretty pretty prettayyyyy good"

console.log(crazyObject.larry.quotes[0]);  // logs larry array, quotes object, element '0' in quotes object

// 3) "Swearing at Larry and Jeff"

console.log(crazyObject.larry.characters[2].favourtieHobby); // logs larry array, characters element [2], favorite hobby for that character/element

// 4) "Chicken Teriyaki Boyyyyyy"

console.log(crazyObject.larry.nicknames[1]);  // logs crazyObject array element larry, nickname object '1'

// 5) The object the contains the name funkhauser

console.log(crazyObject.larry.characters[1].name);  // logs crazyObject array element larry, characters element '1', name of the element

// 6) Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.

crazyObject.larry.quotes.push (" I'm trying to elevate small talk to medium talk "); // pushes the quote into the last place in the larry-quotes array
console.log(crazyObject.larry.quotes);  //logs the push

*/

/*
confirmation:

  'Pretty pretty prettayyyyy good',
  "Is that a parkinson's thing?",
  'some women love a self confident bald man',
  "I'm a walking talking enigma",
  " I'm trying to elevate small talk to medium talk "
]
*/

// Commit Message: "crazy object complete"




/////  Object-ception   /////


const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }

/*

// Change the value of limbo to null.  
inception.reality.limbo = 'null';       // accessing the 'limbo' value in the nested 'reality' object defined by 'inception', the nested object 
                                        //  to change the value of limbo to 'null' 
console.log(inception.reality.limbo);  // logs the value of limbo  // null

// console.log(inception);            // other check: { reality: { dreamLayer1: { dreamLayer2: [Object] }, limbo: 'null' } }

// Commit your work!
//Your commit message should read something like: "objectception complete" 

*/



/////   Bond Films: Array of objects:  /////



const bondFilms = [
    { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
    { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
    { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
    { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
    { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
    { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
    { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
    { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
    { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
    { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
    { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
    { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
    { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
    { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
    { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
    { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
    { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
    { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
    { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
    { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
    { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
    { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
    { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
  ];


  //  Use for loops and conditionals and methods in order to complete the below:

  //  1) Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.
  
/*

  let bondTitles = [];                      // new array for bond films
  for (i = 0; i < bondFilms.length; i++) {  // iteration over the array length
    bondTitles[i] = bondFilms[i].title;     // for each iteration of bondFilms, select 'titles' from the array and assign them to bondTitles
  }
    console.log (bondTitles);               // log the new array for bondTitles

*/

// log results
/*[
  'Skyfall',
  'Thunderball',
  'Goldfinger',
  'Live and Let Die',
  'You Only Live Twice',
  'The Spy Who Loved Me',
  'Casino Royale',
  'Moonraker',
  'Diamonds Are Forever',
  'Quantum of Solace',
  'From Russia with Love',
  'Die Another Day',
  'Goldeneye',
  "On Her Majesty's Secret Service",
  'The World is Not Enough',
  'For Your Eyes Only',
  'Tomorrow Never Dies',
  'The Man with the Golden Gun',
  'Dr. No',
  'Octopussy',
  'The Living Daylights',
  'A View to a Kill',
  'License to Kill'
]*/

  //  2) Create a new array oddBonds, of only the Bond films released on odd-numbered years.
  
    let oddBonds = [];                            // new array for odd films
    let num = 0;                                  // oddBonds iteration variable
      for (j = 0; j < bondFilms.length; j++) {    // for statement that uses 'j' to iterate over the length of the bondFilm array 
        if (bondFilms[j].year % 2 !== 0) {        // if statement that modulates for odd number bond film years
            oddBonds[num] = bondFilms[j].year;    //  when the year is odd, save the value into the oddBonds array
            num++;                                //  'num' assigned to iterate over the new oddBonds array to capture only odd year elements
             } 
        }
        console.log(oddBonds);                      // logs odd movie years (if using title instead of year, will log odd year titles)

// log of odd year films 
        /*
oddBonds[num] = bondFilms[j].year;   // results for odd years
  [
  1965, 1973, 1967, 1977,
  1979, 1971, 1963, 1995,
  1969, 1999, 1981, 1997,
  1983, 1987, 1985, 1989
]

oddBonds[num] = bondFilms[j].title;   //  results for titles of movies for odd year
[
  'Thunderball',
  'Live and Let Die',
  'You Only Live Twice',
  'The Spy Who Loved Me',
  'Moonraker',
  'Diamonds Are Forever',
  'From Russia with Love',
  'Goldeneye',
  "On Her Majesty's Secret Service",
  'The World is Not Enough',
  'For Your Eyes Only',
  'Tomorrow Never Dies',
  'Octopussy',
  'The Living Daylights',
  'A View to a Kill',
  'License to Kill'
]

*/

  //  3) Determine the total cumulative gross of the Bond franchise, and console.log the result. 
  //  hint To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). 
  //  Look into parseInt also.
  
  let bondGross = 0;
  for (k = 0; k < bondFilms.length; k++) {
    bondFilms[k].gross = bondFilms[k].gross.replace("$", ""); //only 1 $ so we don't need /$/g
    bondFilms[k].gross = bondFilms[k].gross.replace(/,/g, ""); // replace: /character/g replaces all instances of that character
    bondGross += parseInt(bondFilms[k].gross);
  }
console.log("$ " + bondGross);

  // Commit your work!
  //Your commit message should read something like: "completed bond challenges"
