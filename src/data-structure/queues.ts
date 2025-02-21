// queues use first in first out
// add to queue O(1)
// remove from queue O(1)
// peek O(1)
// isEmpty O(1)
// isFull O(1)

class HomemadeArrayQueue {
  private items: number[];
  private rear: number = 0;
  private count: number = 0;
  private front: number = 0;

  constructor(capacity: number) {
    this.items = new Array(capacity).fill(0);
  }

  public enqueue(item: number): void {
    if (this.count === this.items.length) throw new Error('queue is full');

    this.items[this.rear] = item;
    this.rear = (this.rear + 1) % this.items.length;
    this.count++;
  }

  public dequeue(): number {
    let item = this.items[this.front];
    this.items[this.front] = 0;
    this.front = (this.front + 1) % this.items.length;
    this.count--;
    return item;
  }

  public peek(): void {
    console.log(this.items[this.front]);
  }

  public isFull(): boolean {
    if (this.count === this.items.length) return true;
    else return false;
  }

  public isEmpty(): boolean {
    if (this.front === this.rear) return true;
    else return false;
  }

  public printQueue() {
    console.log(this.items.toString());
  }
}

let selfmadeQueue = new HomemadeArrayQueue(5);
console.log(selfmadeQueue.isEmpty());
selfmadeQueue.enqueue(5);
console.log(selfmadeQueue.isEmpty());
selfmadeQueue.enqueue(5);
console.log(selfmadeQueue.isFull());
selfmadeQueue.enqueue(4);
selfmadeQueue.enqueue(5);
let front = selfmadeQueue.dequeue();
selfmadeQueue.dequeue();
console.log(front);
selfmadeQueue.printQueue();
selfmadeQueue.enqueue(60);
selfmadeQueue.enqueue(70);
selfmadeQueue.enqueue(81);
selfmadeQueue.printQueue();
selfmadeQueue.peek();
console.log(selfmadeQueue.isFull());
