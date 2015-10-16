/* ...........YOUR MISSION...........

Write a program that will convert a dollar amount to the number of coins that make up the amount. 
Use the common American coins of quarters, dimes, nickels, and pennies.

Input: 0.67 Output: { quarters: 2, dimes: 1, nickels: 1, pennies: 2 }
Input: 1 {quarters:?, dimes: ?, nickels: ?, pennies: ?}
*/

// function coinCounter (dollarAmount) {  Initialize a JavaScript object to hold the coins var coinPurse = {};
// var coinPurse = {}


// coinPurse.quarters = 0;
// coinPurse.dimes = 0;
// coinPurse.nickels = 0;
// coinPurse.pennies = .01;

// return coinPurse; }

// var coins = coinCounter() console.log();

function coinCounter (dollarAmount) {
 var coinPurse = {
 quarters: 0,
 dimes: 0,
 nickels: 0,
 pennies: 0
 }
//Rounded up in order to make the number a whole number without decimals.
 dollarAmount = Math.round(dollarAmount * 100);

//rounded the number down in order to make the number divide the amount it can round exactly, 
//what it can, and if not go to the next line with what is left.
 coinPurse.quarters = Math.floor(dollarAmount/25);
 dollarAmount = dollarAmount - coinPurse.quarters * 25;

//same comment as before.
 coinPurse.dimes = Math.floor(dollarAmount/10);
 dollarAmount = dollarAmount - coinPurse.dimes * 10;

//same comment as ../..
 coinPurse.nickels = Math.floor(dollarAmount/5);
 dollarAmount = dollarAmount - coinPurse.nickels *5;

//same comment as ../../..
 coinPurse.pennies = Math.floor(dollarAmount/1);
 return coinPurse;
 
}
var dollarAmount = (1.37);
console.log(coinCounter(dollarAmount));



