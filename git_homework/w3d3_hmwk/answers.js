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
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
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

/*
confirmation:

  'Pretty pretty prettayyyyy good',
  "Is that a parkinson's thing?",
  'women love a self confident bald man',
  "I'm a walking talking enigma",
  " I'm trying to elevate small talk to medium talk "
]
*/

// Commit Message: "crazy object complete"




