var car = {};
car.mileage = 98765;
car.color = "red"; //update the value of a property of the car objject
//add a method to the car object so that it can be called as car.turnkey()
car.turnTheKey = function() { 
    console.log('engine running'); 
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()