//spread can unbox an array

//rest can pack a smaller array

const top7 = ["si","no","maybe","perhaps","may-b","lowkey","highkey"]

//we can use destructuring

const [] = top7;

const [first,second,third,...secondVisit] = top7;

//also useful in functions

function addTaxtoPrices(taxRate, ...itemsBought){
    return itemsBought.map(item => taxRate*item)
}

let shoppingCart = addTaxtoPrices(1.1,46,89,35,79);
console.log(shoppingCart);
