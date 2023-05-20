var letters = "abc"; //string is iterable confirmed

for (var i=0; i<letters.length;i++){
    console.log(letters[i]);
}

//arrays do be iterable

var veggies = ['onion', 'cucumber', 'carrot'];

console.log(veggies.length);


for (var i=0; i <veggies.length;i++){
    console.log(veggies[i]);
}


//string is not an array confirmed???

var greet = 'Hello ';
var user = 'Lisa';

console.log (greet.concat(user)); // outputs Hello Lisa, can also do greet + user

//you can do double concats


var greeet = "Hello, ";
var place = "World"

greeet.charAt(0); // 'H'

"Wo".concat("rl").concat("d"); // 'World'

"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2

"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']

/**
 * 
 * intertesting shtuff
 * 
 * charAt() 

concat() 

indexOf() 

lastIndexOf() 

split() 

toUpperCase() 

toLowerCase()  
 */