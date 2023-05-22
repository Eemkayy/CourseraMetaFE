//scope is where one side can see the other side but not viceversa

var num1 =10; //global scope

function score(){
    var num2 = 20; //local scope
    console.log(num2);
}

//additional FP

//creating an object
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy) // true
virtualPet.nap()
console.log(virtualPet.sleepy) // false

//first-class functions
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())

//Higher-order functions
function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

//another example

addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number


//pure functions
function addTwoNums(a, b) {
    console.log(a + b)
}

//output will always be the same