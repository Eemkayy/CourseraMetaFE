function concatStrings(strA, strB){
    return strA + strB;
}

concatStrings("abc","def"); //abcdef
concatStrings(1,2)// returns 3, not gud

//tests as expectation-documenting code: code syntax 
//that specifices the expected result of passing specific values to your functions

//testing framework:
expect(concatStrings("abc","def")).toBe("abcdef");

/**
 * Shows conciseness, clarity, repeatability
 */

expect(concatStrings("123","456")).toBe("123456");//green light
expect(concatStrings(1,)).toBe(12); //this would fail, red light

/**
 * refactoring, updating code without affecting the results it produces
 * red-green-refactor cycle, checking whats good whats not as changes are made
 * 
 * 
 * TDD approach:
 * Write failing test
 * Re-write code to pass
 * Optimize code without changing results
 */