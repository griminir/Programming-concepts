// last in, first out
// undo button is an example
// push O(1)
// pop O(1)
// peek O(1)
// isEmpty O(1)

class homemadeStack {
  private stack: number[] = new Array();

  public push(item: number) {
    this.stack.push(item);
  }

  public pop(): number | undefined {
    let output = this.stack.pop();
    return output;
  }

  public peek(): number {
    return this.stack[this.stack.length - 1];
  }

  public isEmpty(): boolean {
    if (this.stack.length === 0) return true;
    else return false;
  }
}

let selfmadeStack = new homemadeStack();
selfmadeStack.push(5);
selfmadeStack.push(10);
let topOfStack = selfmadeStack.pop();
console.log(topOfStack);
console.log(selfmadeStack.peek());
console.log(selfmadeStack.isEmpty());
selfmadeStack.pop();
console.log(selfmadeStack.isEmpty());
