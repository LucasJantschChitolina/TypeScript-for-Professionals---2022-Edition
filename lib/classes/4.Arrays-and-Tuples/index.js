"use strict";
//Array
{
    let array = [1, 2, 3];
}
;
// Is the same to
{
    let array = [1, 2, 3];
}
;
// Usage
array = [1];
array = [1, 2, 3, 4, 5];
array = ['hello']; // Error
// Sometimes you want ot declare an array of a fixed length.
// An example of that is an array with two number which can be
// used to represent a point in space.
// A fixed length is commonly called a tuple in programming jargon and Typescript supposed to bring Tuples within it type system
// Tuple
let tuple = [0, 0];
// Here we've declared a couple of two members and both of these members must be of type no. We can use this to represent a point in space in terms of usage.
tuple = [1, 1];
tuple = [2, 6];
tuple = [5]; // Error: must be 2 items
tuple = [5, 4, 3]; // Error: must be 2 items
tuple = ['elite', 1337]; // Error: must be number
