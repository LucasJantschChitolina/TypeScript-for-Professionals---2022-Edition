// The standard way of accessing environment variables within Node is using process. And here we 
// have a simple piece of code that logs out the logged in user.

console.log(
    'logged in user:',
    process.env.USER
)

// However, you can see that we are getting an error on the process variable. If you hover over the error,
// you can see that it is complaining that cannot find the name process. This is because the process is not
// defined anywhere within our code base and we expect it to be provided by the just runtime.

// code base, for example, for the process variable we can simply declare it as a variable of type any. 
// The syntax for a type declaration is the same as the syntax for declaring any of the variable within
// your code base with key differences.

// First, we use the declare keyword before declaring the variable, and then we cannot provide any implementation
// details as they are not really a declaration, but rather a definition.

// For example, if we try to provide a value for the process, variable types complain that you cannot
// provide any implementation within a declaration.

// TypeScript supports creating these declarations within a separate file as well. These files are called
// declaration files.

// A declaration file is simply a set of declarations and has the file extension to d.ts
