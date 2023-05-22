//Template literals are an alternative way of working with strings, which was introduced in the ES6 addition to the JavaScript language.

let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) //display both variables using template literals

//es5

var hi = "Hello";
var world = "World";
console.log(greet + " " + place + "!"); //display both variables without using template literals

//string literals allows this

`Hello
My
Son
`

//SL allows multiline strings
//it's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} stars!`) 

//ES5 Strings

let noMultiLine = "No multi-line strings in ES5";
console.log("Did you know?" + noMultiLine);

//ES6
let multiLine =`
Using ES6
backticks,
multi-line
strings
are
possible
`;
console.log(multiLine);

let first = `you want cheese on that sammich??`
let second = `yeah wouldnt you wanna know`
console.log(`${first} - mhm, ${second}`)