


//////////////    ///////////////    //////////////    ///////////////    //////////////    ///////////////

// ~~~~  Section 2 Combining Datatypes  Combine objects, arrays, and functions  ~~~~


// touch combining_datatypes.js and do your work for this section in this new file

// 1) Create an object, called crayonBox, that has a property that is an array. 
// The array should have the names of some crayons. Log one of the elements of that array.


const crayonBox = {                                       // crayonBox object that holds the crayon array
    crayons: ['brown', 'black', 'tan', 'yellow', 'cream'] // crayon array with natural crayon colors chosen
}
console.log(crayonBox.crayons[0]); // logs the 0 position element of the crayons array, within the crayonBox object. 
                                    // that 0 position element is 'brown' [0,1,2,3,4,5,...]


// 2) Create an object 'bottle' that has a property that is an object: 'cap'. 
// cap can have properties like 'material': 'metal' or 'plastic', 'color': blue or white etc. 
// Log one of the properties of that inner object.

const bottle =  {            // object 'bottle' with the property 'cap'
    cap: {                   // 'cap' properties 
        material1: 'metal',     
        color1: 'silver' 
        }   
    }        

console.log(bottle.cap.color1); // logs the propery 'color1' inside the object 'cap' which is inside the object 'bottle'


//  3) Create an array called 'receipt' that has at least one object in it. The inner objects should be items that 
//  have a name and a price. Log one of the properties of that inner object.


const receipts = [                           // receipt array with three inner objects " WallyWorld", "Maejor Store" & "Speedywayz"
    {name: "WallyWorld", total: 75.21},
    {name: "Maejor Store", total: 107.55}, 
    {name: "Speedywayz", total: 25.00}
   ]
 
 console.log(receipts[0].name);              //logs the name of the 0 object of array, "WallyWorld"



//  4) Create an array called 'apartmentBuilding' that has an array as one of its elements, 
//  the inner array should be the names of the 'tenants'. Log one of the elements of the inner array.


const apartmentBuilding = [         // apartmentBuilding array with two arrays as elements inside of it
    buildingWing = ['North', 'South', 'East', 'West'],              // inner array0 buildingWing, with 4 elements
    tenants = ['Hickory Smoke', 'Jaxson Five', 'Aaround Tuit', 'Justin Case'],  // inner array1 tenants,with 4 elements
]
console.log(apartmentBuilding[1][2]);      // logs the [1] inner array (tenants), and [2] element of inner array1 ('Aaround Tuit')
                                            // w/n the apartmentBuilding array 


// Commit: "Combine objects, arrays, and functions"





//////////////    ///////////////    //////////////    ///////////////    //////////////    ///////////////

 // ~~~~~   Combine objects, arrays, and functions more than one level deep  ~~~~~~

// 1) Create a function 'knit' that returns an object that has the following kinds of properties 
// item: scarf, size : 6ft etc. 
// Log a value of that object (hint: call the function and then call a property on the return value).

function knit (item, style, blend, size) {       // knit function with parameters (item, style, blend, size)
    this.item = item;                           // "this." method with parameters (item, style, blend, size), from the knit function
    this.style = style;
    this.blend = blend;
    this.size = size;
}

const discountRack = new knit('scarf', 'infinity', 'angora', 'one size'); //  a 'new knit' function constructor contains the arguments 
                                                                          // passed to and received by the 'knit' function
    // "A constructor invocation creates a 'new' object. The new object inherits the properties and methods from its constructor." 
                                                                            
console.log(discountRack.style);                                        // log the new 'style' object from the discountRack function 


// 2) Create a function crayonSelector that returns an object that has an array (you can reuse your crayonBox object). 
// Log one of the elements of that array.

function crayonSelector (size, color) {             // function crayonSelector that will return objects 'size' & 'color' 
    this.size = ['jumbo', 'standard', 'miniture'];  // size array, referred to by 'this' keyword
    this.color = ['brown', 'black', 'tan', 'yellow', 'cream'];  // color array, referred to by 'this' keyword
}
const selectedCrayon = new crayonSelector ( ); // sets a new variable selectedCrayon equal to the contructor function crayonSelector
console.log(selectedCrayon.size[0]);            // logs the 0 element of the 'size' object array as a result of the call to the 
                                                // crayonSelector function; selectedCrayon

                                                


// 3) Create a function powerButton that returns a function called options - 
// options should console.log a simple message like select a song. 
// Call that inner function



const options = () => {                 // options function that points/directs a call to return the string
    return ('Please select a song.');
  }
  
  const powerButton = () => {       // powerButton function that points /directs a call to return the options function
    return options()                
  }
  
  console.log(powerButton());       // logs the object of the powerButton, which is the object function, which points to the string





// Commit: "Combine objects, arrays, and functions more than one level deep"



//////////////    ///////////////    //////////////    ///////////////    //////////////    ///////////////

/*
 // ~~~~~~  Model a Vending Machine Model a vending machine  ~~~~~

a vending machine is an object
it has an array of snacks (make 3 snacks)
snacks are objects that have a name and a price
a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
Be able to call vendingMachine.vend() with a valid integer to return a snack

*/




/*



//////////////    ///////////////    //////////////    ///////////////    //////////////    ///////////////

// ~~~~~~~~~~      Callbacks        ~~~~~~~~~~ 

// 1) Make a function add that takes two arguments (numbers) and sums them together


// 2) Make a function subtract that takes two arguments (numbers) and subtracts them


// 3)  Make a function multiply that takes two arguments and multiplies them


// 4)  Make a function divide that takes two arguments and divides them


// 5) Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).


// 6) Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.


// 7) Call calculate 4 times, each time using one of the operation functions you wrote


// 8) Function definition placement


//9) Clean up this code, so that it works and has function definitions in the correct place

bar();
const bar = () => {
    console.log('bar here');
}
foo();

const foo = () => {
    console.log('foo here');
}
Error reading
What is meant by the error(s) this produces?

foo();

const foo ()=>{
    console.log('hi');
}


*/