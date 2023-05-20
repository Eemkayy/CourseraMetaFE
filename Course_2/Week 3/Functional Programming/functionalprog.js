//func prog

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate =1.2;

function convertCurrency(amount, rate){
    return amount*rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate);
console.log(currencyTwo);

//you can return objects in a function, just like java constructor in a nutshell

function objectMaker(val) {
    return {
        prop: val
    }
}

objectMaker(20);

//Something like this can also be done

objectMaker( doubleIt(100) );