"use strict";
// Here we have a simple typescript class with the property, a constructor and the method,
class Animal10 {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
