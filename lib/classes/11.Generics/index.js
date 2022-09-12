"use strict";
/** A FIFO (First in First Out) collection */
class Queue11 {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
const queue11 = new Queue11();
queue11.push(123);
queue11.push(456);
console.log(queue11.pop()?.toPrecision(1));
console.log(queue11.pop()?.toPrecision(1));
