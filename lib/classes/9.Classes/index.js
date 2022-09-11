"use strict";
// Let's talk about JavaScript classes here.
// We have a class animal with the property name, a constructor function that is used to create instances
// of this class and a method called move that takes the distance in meters and logs or something to the
// console.
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
// We create a variable to store an instance of this class and then we can call methods on this instance.
// Now, TypeScript already understands all the information that is present in the code right now, but
// additionally, it allows us to annotate any of the properties, the parameters of the constructor,
// as well as the parameters of the methods, as well as the return type
// Typescript also allows fine grained control of the properties and methods of the class. Now, by default, all properties and methods are public, which is the standard for JavaScript. However, we can be explicit about this excess by using the public keyword before any of the properties or methods.
// There might be some class members that we do not want to be accessible outside of the class body. For example, we might not want the name property to be accessible outside in order to limit the access of a member only within the class. We can use the typescript keyword private and now any access outside the class body is resulting in a compile time error.
let cat = new Animal('Cat');
cat.move(10);
cat.name = 'Dog'; // Error: Property 'name' is protected and only accessible within class 'Animal' and its subclasses.
// Now JavaScript also supports class inheritance so we can create a class called Bird that extends Animal and has an additional method called fly. 
class Bird extends Animal {
    fly(distanceInMeters) {
        console.log(`${this.name} flew ${distanceInMeters}m.`);
    }
}
// Now, as mentioned, private members are only accessible in the class body. So we get a compile time error when we try to use the name property in the class. TypeScript provides another access modifier called protected, which still keeps the member inaccessible
// on instances, however, makes it accessible within the class hierarchy so we can access this name property from the childbirth class.
