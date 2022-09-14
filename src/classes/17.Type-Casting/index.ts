// Other typed programming languages has the concept of type casting.

// an any value
let leet;

// later
leet = '1337';

//you might be tempted to use a type assertion to convert to a number
const number17 = leet as number;

// but, type assertion is no the same of type casting
// this is because the value held by the variable will still be a string '1337'

console.log(number17 == 1337) //false
console.log(number17) // '1337'


