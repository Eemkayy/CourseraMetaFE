//total cost of buying a pair of shoes
/**
 * e.g. get total price of shoes
 * 
 * FP
 * variables
 * 
 * function
 * 
 * output
 * 
 * OOP
 * store all data, including output statements
 */

var purchase1 = {
    shoes:100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase1.shoes+purchase1.stateTax; //can also be rewritten as this.shoes and so forth
        console.log('Total price:', calculation);
    }
}



var purchase2 = {
    shoes:50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase2.shoes+purchase2.stateTax; //same as above
        console.log('Total price:', calculation);
    }
}

//solution is to create 1 template and just reuse it: class

//functional programming
var shoes = 100;
var stateTax = 1.2;

function totalPrice(shoes, tax){
    return shoes*tax;
}

var toPay = totalPrice(shoes, stateTax);

console.log(toPay); //120

//OOP
var purchase1 = {
    shoes:100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase1.shoes+purchase1.stateTax; 
        console.log('Total price:', calculation);
    }
}
purchase1.totalPrice();//120

//OOP2

var purchase2 = {
    shoes:50,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = purchase2.shoes+purchase2.stateTax; //same as above
        console.log('Total price:', calculation);
    }
}
purchase2.totalPrice();//60

//OOP3: this, you can change it to 'this' and ggs

var purchase1 = {
    shoes:100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes+purchase1*this.stateTax; 
        console.log('Total price:', calculation);
    }
}
purchase1.totalPrice();//120
