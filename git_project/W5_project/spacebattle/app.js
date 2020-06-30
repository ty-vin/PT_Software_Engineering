
let game = {   // the game as an object
    round: 0,
    targetShip: 0,
    userResponse: "",  // records user response to determine attack or retreat
  };
  
  let ussSchwartznegger = {     //main ship as an object
    name: "USS Schwartznegger",
    hull: 20,
    firePower: 5,
    accuracy: 0.7,
    attack: function () {
      return Boolean(Math.random() <= this.accuracy);  // main ship attack -> if attack is <= accuracy returns true
    },
  };
  
  class AlienShip {             // alien ship as a class (allows multi instances)
    constructor(name, hull, firePower, accuracy) {  // constructors are info about class (this. belongs to constructor)
      this.name = name;
      this.hull = hull;
      this.firePower = firePower;
      this.accuracy = accuracy;
    }
    attack() {                      // alien attack function 
      return Boolean(Math.random() <= this.accuracy);
    }
  }
  
  let Ships = [];                   // arrays for the new alien ship objects       
  let alienHullValues = [3, 4, 5, 6]; 
  let alienFirePowerValues = [2, 3, 4];
  let alienAccurValues = [0.6, 0.7, 0.8];
  let alienShipNames = ["KJNG","010101","beebeeboop","QWERTY","Totally a Human","QUERTY's 2nd cousin", "The ABSOLUTE DOOOOMster"]
  
  let createShips = () => {         // create ships function
    for (let i = 0; i < 6; i++) {   // for loop generating new ship objects for array w/ randomized constructors
      let name = alienShipNames[i + 1];
      let hull = alienHullValues[Math.floor(Math.random() * 4)];  // random of 4 array elements
      let firePower = alienFirePowerValues[Math.floor(Math.random() * 3)];  // random of 3 array elements
      let accuracy = alienAccurValues[Math.floor(Math.random() * 3)]; // random of 3 array elements
      Ships[i] = new AlienShip(name, hull, firePower, accuracy); // alien ship w/randomized elements
    }
  };
  
  let shipsBattle = (ship1, ship2) => {  // battle function with parameters and attack states of 0 or 1
    let attacking = 0;
    let bAttacked = 1;
    let temp;
    let ships = [ship1, ship2];  // places the two ships into an array
    let attack = false;         // start the game w/o attacking
    
    console.log("%c Attack Begins =================", "font-size: 30px");  // ship battle loop w/n shipsBattle function
    while (ships[bAttacked].hull > 0) {
      if (ships[bAttacked].hull > 0) {
        console.log("\n");
        console.log(
          `%c ${ships[attacking].name} attacked ${ships[bAttacked].name}`,
          "color: teal; border: 1px solid black; font-size: 18px;"      // output on "game console"
        );
        attack = ships[attacking].attack();
        if (attack === true) {
          ships[bAttacked].hull -= ships[attacking].firePower;          //more fire power
          console.log(
            `%c Attack Successful! ${ships[bAttacked].name} Hull: ${ships[bAttacked].hull}`,
            "color: green; font-weight: bold; font-size: 16px;"     // output on "game console"
          );
        } else {
          console.log(
            `%c Attack Unsuccessful! ${ships[bAttacked].name} Hull: ${ships[bAttacked].hull}`,
            "color: magenta; font-size: 16px;"          // output on "game console"
          );
        }
        if (ships[bAttacked].hull <= 0) {
          console.log(
            `%c ${ships[bAttacked].name} has been destroyed`,
            'color: orange; border: 1px solid purple; font-size: 16px;'     // output on "game console"
          );
          if (ships[bAttacked] === ussSchwartznegger) {
            alert("Game Over!!!");
          } else if (
            ships[bAttacked].name === Ships[Ships.length - 1].name
          ) {
            alert(
              ships[bAttacked].name + "defeated! Alien fleet eliminated!"
            );
          }
          else {
            game.userResponse = prompt(
              `${Ships[game.targetShip].name} defeated!\n${
                ussSchwartznegger.name
              } Hull: ${
                ussSchwartznegger.hull
              }\nWould you like to ATTACK ${Ships[game.targetShip+1].name} or RETREAT from battle?`,
              ""
            );
            game.targetShip += 1; 
            checkUserPrompt();     // checkUserPrompt is being called by the ship battle function
            return;
          }
        } else {
          temp = attacking;  // holding place for battle state
          attacking = bAttacked;
          bAttacked = temp;
        }
      }
    }
  };
  let checkUserPrompt = () => {         // checks the user prompt function
    let responseUpperCase = game.userResponse.toUpperCase(); // changes user response to upper case
    if (responseUpperCase === "ATTACK") {           // when ATTACK start battle
      shipsBattle(ussSchwartznegger, Ships[game.targetShip]);  // calls the shipsBattle function
    } else if (responseUpperCase === "RETREAT") {           // retreats if shipsBattle function is not called
      alert("Retreated. This planet's is busted anyway.");
      console.log("The ship has retreated and Earth is Doomed!");
    }
  };
  
  let gameStart = () => {  // game start function
    createShips();
  
    game.userResponse = prompt(  // user prompt for action
      "Here they come!\nWould you like to ATTACK first or RETREAT?",
      ""
    );
    checkUserPrompt();  // call to check the user response function
  };
  
  gameStart();      //start the game