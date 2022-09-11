// Function 

// Now, just like we can annotate variables, we can also annotate the parameters of a function. TypeScript also allows us to annotate the return type of a function using the same familiar syntax.

function add(a: number, b: number): number{
    return a + b;
}

// Functions with no return
function log(message: string): void {
    console.log('log: ', message)
}

// Now, JavaScript also allows you to create a function that can take an indefinite number of arguments. The way to indicate this in Javascript is using three dots before the pen we do in such a parameter is called a rest parameter.

// Here we have a function, some that you can invoke with as many numbers as you want.

function sum(...values: number[]) {
    return values.reduce((previous, current) => {
        return previous + current
    })
}

// Internally, all these arguments get collected into a JavaScript array for the rest parameter. Typescript understands this and will enforce that you annotate the rest parameter as an array 

sum(1, 2)
sum(1, 2, 3, 4)


