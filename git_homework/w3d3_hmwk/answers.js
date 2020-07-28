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

console.log(rainbowColors[4]);



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

console.log(tV.hobby);

// 5) Commit message: "took it easy"






