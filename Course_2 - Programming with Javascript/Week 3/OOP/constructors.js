/**
 * Native objects:
 *  Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON,
 * 
 * To use a constructor function -> prepend with new
 * 
 * Date when = new Date()
 * 
 * some allow to have new some done eg Math
 * 
 * Math is static objects whose properties and methods can be accessed directly
 * 
 * 
 * 
 * function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}
let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}
*/

/**
 * Also:
 * let apple = new String("apple");
 * apple; // --> String {'apple'}
 * 
 * Object of type string
 * 
 * let pear = "pear";
    pear; // --> "pear"
 * string literal - primitive value
    e.g. => ew String('plum') === new String('plum'), 
    you'll get back false, while "plum" === "plum" will return true
 * 
"abcd".match(/d/); // null
"abcd".match(/a/); // ['a', index: 0, input: 'abcd', groups: undefined]

Example of objects:
new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();

 */