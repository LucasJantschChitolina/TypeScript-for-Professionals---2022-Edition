"use strict";
// The main reason why any was added to the typescript type system was to allow easy migration of JavaScript code to Typescript, for example, here we have some JavaScript code that uses zero type annotations.
// So in summary, if you want a quick fix migration, use any.
// But if you have the time to do more reliable refactoring or are dealing with code that you don't trust, use unknown.
// This might even help you understand the code a bit better.
