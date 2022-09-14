let hello16 = load();

const trimmed = hello16.trim()

// You use type assertions when you want to tell the compiler
// what the type of a variable is without having to do any of the type inference or type check.

// with the as string type assertion we are teeling the typescript compiler: 
// "compiler, trust me, I know this is a string, you don't need to second guess it"

const trimmed = (hello16 as string).trim()
