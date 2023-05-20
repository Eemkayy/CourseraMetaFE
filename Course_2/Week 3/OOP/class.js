class Car {
    //broom broom

    constructor(color, speed){
        this.color = color;
        this.speed = speed;
    }

    turboOn() {
        console.log("we zoomin");
    }
}


const hey = new Car("Red", 100);

hey.turboOn();

/**
 * 4 main components of OOP:
 *  1. Inheritance
 *  2. Encapsulation
 *  3. Abstraction
 *  4. Polymorphism
 * 
 * 
 * superior class is Object
 * 
 * e.g.
 * 
 * class Animal {}
 * 
 * var myDog = Object.create(Animal) / =NEW aNIMAL()
 * 
 * console.log(Animal)
 * 
 */

/**
 * 1. =====================INHERITANCE ==============================
 * 
 * 1. Base class of something
 * 2. sub-class of something that inherits base class properties (super class)
 * 3. could be even subber subclasses
 * 
 * class Animal {  ...class code here...  }
 * class Bird extends Animal {  ...class code here...  }
 * class Eagle extends Bird { ...class code here...  }
 * 
 * 
 */


/**
 *  2. ===============ENCAPSULATION========================
 * 
 *  Making a code implementation hidden from other users, they dont have to know how the code works in order to use it
 * 
 * "abc".toUpperCase() - so long as it doesnt break my code, I dont need to know how it works
 */

/**
 * 3. ===============ABSTRACTION===================
 * Writing code that makes it more generalized
 * > extracting the concept of what we're trying to do, rather than dealing with a specific manifestation of that concept
 * > encapsulation is about us not having access to or not caring how some imp works internally
 * 
 */

/**
 * 4. ===============POLYMORPHISM===============
 * Bell -> can be on a door or a bycicle for example:
 * 
 * const bicycle = {bell: function() {
 *     return "ring ring, im zooming
 *  "}}
 * 
 * const door = {
 * bell: function(){
 * return "ding dong doordash here u lazy"}}
 * 
 * bicycle.bell()
 * door.bell()
 * 
 * now, actual polymorphism:
 * 
 * function ringTheBell(object){
 *  console.log(object.bell())}
 * 
 * will output whatever object we put in w said method
 * 
 * other examples:
 * 
 * "abc".concat("def"); // 'abcdef'
 * ["abc"].concat(["def"]); // ['abc', 'def']
 * ["abc"] + ["def"]; // ["abcdef"]
 * 
 * concat - polymorphic
 * 
 * 
 * 
 * better example:
 * 
 class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

 */


class Animal {

}

class Cat extends Animal {
  constructor() {
    super();
    this.noise = "meow";
  }
}

var result = new Animal();
console.log(result.noise);