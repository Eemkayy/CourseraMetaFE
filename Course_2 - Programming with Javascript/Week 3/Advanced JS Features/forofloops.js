const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) { //car is not iterable!!! Error!
    console.log(prop)
}

const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
} //iterable, so this is the same as for (Integer num : nums) in java

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); //[ ['speed', 400], ['color', 'magenta'] ]

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();