try {
    console.log(c+d);
    throw new Error();
} catch(err){
    console.log("what you doin");
    console.log(err)
}
console.log("red vented"); //this code works, and it shows what's wrong at which line

//again w RefErr

try {
    throw new ReferenceError();
} catch(err){
    console.log(err)
    console.log('There was an error')
    console.log('The error was saved in the error log')
}

console.log("blue got booted out")

/**
 * types of errors (not all)
 * ReferenceError -one tries to use variables that haven't been declared anywhere.

SyntaxError - Any kind of invalid JavaScript code will cause a SyntaxError.

TypeError - A TypeError is thrown when, for example, trying to run a method on a non-supported data type.

RangeError - out of bounds error

AggregateError 

Error 

InternalError 

URIError
 */