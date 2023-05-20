//DS examples: objects, maps, sets, arrays

const grades = [1,2,3,45,77,89];
let gradeSum =0;

for (i =0; i<grades.length;i++){
    gradeSum+=grades[i];
}

console.log(gradeSum/grades.length);

//map
/**
 * key value pair - hash function - hash table
 */

/**
 * Set:
 * each item must be unique
 */

const house1 = 'red';
const house2 = 'blue';
const house3 = 'red';

const houses = new Set();
houses.add(house1).add(house2).add(house3)
console.log(houses);

/**
 * 
 * For arrays:
 * 
 * forEach, filter, map
 */
//for each
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});

//filter
const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})

//map
[0,10,20,30,40,50].map( function(num) {
    return num / 10
})


/**
 * EXAMPLE: Converting an object into an array
 */

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result);

/**
 * Maps
 */

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

//we can use get() to get a value

/**
 * SETS
 */
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

/**
 * Other DS:
 * Queues
 * Linked lists (singly-linked and doubly-linked)
 * Trees
 * Graphs
 * 
 */