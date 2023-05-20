var storeManager = {} //this is how you instantiate an object
storeManager.rangeTilesPerTurn = 4; // property name = visible/property value

var assistantManager = {
    movement : 3,
    socialSkills :30,
    streetSmarts : 30,
    amogus: 3000 //another way of doing this
}

assistantManager.monies = 1; //you can add things like these

console.log(assistantManager);

//objects using bracket notation

var house = {}
    house["rooms"] = 4;
    house["color"] = "red";
    house.status = "sold";

var indexes = ['rooms','color','status']; //arrays are literally objects

for (var i=0; i<indexes.length;i++){
    console.log(house[indexes[i]]); //another way of accessing
}

var fruits = []

fruits.push("strawberry");
console.log(fruits.pop());

function bobTheArrBuilder(hello,hi,howareyou){
    var arr = []
    arr.push(hello);
    arr.push(hi);
    arr.push(howareyou);
    console.log(arr);
}
bobTheArrBuilder("meow", "bork", "onomatopeya")


/**
 * Math.ceil() - rounds up to the closest integer 

 Math.floor() - rounds down to the closest integer 

 Math.round() - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 

 Math.trunc() - trims the decimal, leaving only the integer
 * 
 */

 /**
  * Math.pow(2,3) - calculates the number 2 to the power of 3, the result is 8 

Math.sqrt(16) - calculates the square root of 16, the result is 4 

Math.cbrt(8) - finds the cube root of 8, the result is 2 

Math.abs(-10) - returns the absolute value, the result is 10 

Logarithmic methods: Math.log(), Math.log2(), Math.log10() 

Return the minimum and maximum values of all the inputs: Math.min(9,8,7) returns 7, Math.max(9,8,7) returns 9.

 Trigonometric methods: Math.sin(), Math.cos(), Math.tan(), etc.
  * 
  */


 var decimal = Math.random();

 console.log(decimal);
 console.log(decimal*10)