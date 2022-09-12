let exampleAny: any;
let exampleUnknown: unknown;

// any
exampleAny = 123;
exampleAny = "Hello";

// unknown
exampleUnknown = 123;
exampleUnknown = "Hello";

// any
exampleAny.allows.anything.you.can.imagine();
let anySetBool: boolean = exampleAny;

// You can still accept anything into an unknown, but you cannot just use it in an unsafe manner.

// For example, you cannot willy nilly access any properties on it and you cannot assign it to well-defined types like Boolean without further checks.

// All attempts to do so would result in a compile time error. And that is the main value proposition of the unknown type.

// If you want to use it as a string, you have to check that its current value is going to be a string.

if (typeof exampleUnknown == "string") {
  exampleUnknown.trim();
}

// And if you want to use it as a boolean, you have to check that it is going to be a boolean.

if (typeof exampleUnknown == "boolean") {
  let unknownSetBool: boolean = exampleUnknown;
}

// So unknown can be thought of as a more type safe version of any.

// It still allows free access to all types within the type system, but also in a safe manner.
