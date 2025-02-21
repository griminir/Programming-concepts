"use strict";
// last in, first out
// undo button is an example
// push O(1)
// pop O(1)
// peek O(1)
// isEmpty O(1)
class HomemadeStack {
    constructor() {
        this.stack = new Array();
    }
    push(item) {
        this.stack.push(item);
    }
    pop() {
        let output = this.stack.pop();
        return output;
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    isEmpty() {
        if (this.stack.length === 0)
            return true;
        else
            return false;
    }
}
let selfmadeStack = new HomemadeStack();
selfmadeStack.push(5);
selfmadeStack.push(10);
let topOfStack = selfmadeStack.pop();
console.log(topOfStack);
console.log(selfmadeStack.peek());
console.log(selfmadeStack.isEmpty());
selfmadeStack.pop();
console.log(selfmadeStack.isEmpty());
