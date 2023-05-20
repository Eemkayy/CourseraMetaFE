/**
 * Null DTs
 * Undefined DTs
 * Empty Strings
 */

//Null data type - intentional absence of any object value

var letters = 'abc';

letters.match(/a/); //works
letters.match(/d/); //does not work, cant be built, will return null

//undefined can hold 1 data type, itself. E.G. all functions by default return undefined

console.log("Jane Smith");
var noise;
console.log(noise); //returns undefined
noise = "thunder";
console.log(noise);

console.log(nosie2) // would return Uncaught RefError

var game = {
    score:100
}

game.Score; //gives undefined

var name1 = '';
var name2 = ""; //both empty strings
console.log(name1)