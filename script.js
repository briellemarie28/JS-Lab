/**
 * @param prompt user to ask if they would like to play the game
 *loops points until there is a winner
 *
 */

let question = prompt("Do you want to play the game?");
prompt("What is your name");

var grantHealth = 10;
var userHealth = 40;
var grantDeath = 0;
let randomNumber = Math.floor(Math.random() * 2) + 1;

while (userHealth >=0 && grantDeath < 3) {
    grantHealth = grantHealth-(Math.floor(Math.random() * 2) + 1);
    userHealth = userHealth-(Math.floor(Math.random() * 2) + 1);

console.log ("Adam has", userHealth, "health points left");
console.log("Grant the mighty chicken has", grantHealth, "health points left");

if (grantHealth <= 0) {
console.log (grantDeath);
console.log ("Adam has won, Grant receives 10 health points");
console.log("Grant the might chicken has", grantHealth, "health points left")

 grantDeath ++;
 grantHealth = 10;
}
}    
 
//determine winner
if (grantDeath ===3) {
  console.log("Adam is the winner");
}
else if (userHealth <=0) {
console.log ("The user has been defeated!");
}













    




