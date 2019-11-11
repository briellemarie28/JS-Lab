/**
 * @param prompt user to ask if they would like to play the game
 *loops points until there is a winner
 *
 */

//let question = prompt("Do you want to play the game?");
//prompt("What is your name");


var grantHealth = 10;
var userHealth = 40;
var grantDeath = 0;
let randomNumber = Math.floor(Math.random() * 2) + 1;

while (userHealth >=0 && grantDeath < 3) {
    var randomGrant = grantHealth-randomNumber;
    var randomUser = userHealth-randomNumber;
console.log ("Adam has", randomUser, "health points left");
console.log("Grant the mighty chicken has", randomGrant, "health points left");

//???????how to reduce by random number
 grantHealth--;
 userHealth--;
}    

//this doesn't work
if (grantHealth === 0 && grantDeath < 3) {
console.log (grantDeath);
console.log ("Adam has won, Grant receives 10 health points");
console.log("Grant the might chicken has", randomGrant, "health points left")
 grantDeath --;
 grantHealth = 10;

} else {grantHealth === 0 && grantDeath === 0
console.log ("Adam is the winner!");
}
//log winner






    




