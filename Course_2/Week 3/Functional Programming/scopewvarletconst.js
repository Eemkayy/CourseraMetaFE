let color = 'red';

if (color =='red'){
     color == 'blue'
}

//ES5 JS

var user = "Miranda";

//ES6

let user = "Miranda"
const user = "Miranda"

//behavior w let and const is more strict than var
/**
 * cant be redeclared
 * scoped to the block
 * 
 * let = value might change
 * const = might not change
 */


/**
 * VAR:
 * we can address a var variable before initialization (as logn as we initialize it somewhere in our code)
 * we can declate and redeclare the same variable without errors
 * 
 * LET:
 * We cant access a let variable before we declare it
 * We can declare an unassigned variable w let
 * we cant redeclare a let variable
 * we can reassignt it
 * 
 * CONST:
 * MUST be initialized
 * cant access the const before initialziing
 * cant redeclare it
 * 
 * Var          Let         Const
 * <-------------------------------->
 * lenient                      strict
 * 
 */