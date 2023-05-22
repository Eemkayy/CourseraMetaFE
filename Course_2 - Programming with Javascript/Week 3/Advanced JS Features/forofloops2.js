const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log(" The sCar object: ", sportsCar);

console.log('for-in is unreliable');
for (prop in sportsCar){
    console.log(prop) // prints out all of the contents of car itself
}

console.log("Iterating over object AND its prototype!")

console.log('for-of is reliable')
for (prop of Object.keys(sportsCar)){
    console.log(prop + ": " + sportsCar[prop]) //prints out ONLY the contents altered for sportscar
}

const car2 = {
    engine: true
}

const sportsCar2 = Object.create(car2);
sportsCar2.speed = "zooming";
console.log("The new sportsCar object: ", sportsCar2);

for (prop in sportsCar2){
    console.log('yes', prop)
}

for (prop of Object.keys(sportsCar2)){
    console.log('yesyes', prop + ": "  + sportsCar2[prop])
}