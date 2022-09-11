/** A FIFO (First in First Out) collection */

class Queue11<T> {
    data = [];
    push(item: T) { this.data.push(item); }
    pop(): T { return this.data.shift(); }
}

const queue11 = new Queue11<number>()
queue11.push(123);
queue11.push(456);

console.log(queue11.pop()?.toPrecision(1))
console.log(queue11.pop()?.toPrecision(1))
