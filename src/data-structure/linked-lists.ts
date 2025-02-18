// a linked list contains 2 pieces of data. The value and the Address of the next node in the linked list
// first node is called head and last node is called tail
// lookup by value O(n)
// lookup by index O(n)
// insertion at the tail and at the head is O(1)
// insertion in the middle is O(n)
// deleting from the end is O(n)
// deleting from the beginning is O(1)
// deleting from the middle is O(n)

class LinkedNode {
  private value: number;
  private next: LinkedNode | null = null;

  constructor(value: number) {
    this.value = value;
  }

  public getValue(): number {
    return this.value;
  }

  public getNext(): LinkedNode | null {
    return this.next;
  }

  public setNext(node: LinkedNode | null): void {
    this.next = node;
  }
}

class HomemadeLinkedList {
  private first: LinkedNode | null = null;
  private last: LinkedNode | null = null;
  private size: number = 0;

  private isEmpty(): boolean {
    return this.first === null;
  }

  public addLast(item: number): void {
    let node = new LinkedNode(item);
    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      this.last?.setNext(node);
      this.last = node;
    }
    this.size++;
  }

  public addFirst(item: number): void {
    let node = new LinkedNode(item);
    if (this.isEmpty()) this.first = this.last = node;
    else {
      node.setNext(this.first);
      this.first = node;
    }
    this.size++;
  }

  public indexOf(item: number): number {
    let index: number = 0;
    let current = this.first;
    while (current !== null) {
      if (item === current.getValue()) {
        return index;
      }
      index++;
      current = current.getNext();
    }
    return -1;
  }

  public containsFull(item: number): boolean {
    let current = this.first;
    while (current !== null) {
      if (current.getValue() === item) return true;
      current = current.getNext();
    }
    return false;
  }

  public containsImproved(item: number): boolean {
    return this.indexOf(item) !== -1;
  }

  public deleteFirst(): void {
    if (this.isEmpty()) throw new Error('list is already empty');

    if (this.first === this.last) {
      this.first = this.last = null;
      this.size--;
      return;
    }

    if (this.first !== null) {
      let second = this.first.getNext();
      this.first?.setNext(null);
      this.first = second;
    }
    this.size--;
  }

  private getPreviousNode(node: LinkedNode): LinkedNode | null {
    let current = this.first;
    while (current !== null) {
      if (current.getNext() === node) return current;
      current = current.getNext();
    }
    return null;
  }

  public deleteLast(): void {
    if (this.isEmpty()) throw new Error('list is empty');

    if (this.first === this.last) {
      this.first = this.last = null;
    } else {
      let previous = this.getPreviousNode(this.last!);
      this.last = previous;
      this.last?.setNext(null);
    }
    this.size--;
  }

  public getSize(): number {
    return this.size;
  }

  // Print the list
  public printList(): void {
    let current = this.first;
    while (current !== null) {
      console.log(current.getValue());
      current = current.getNext();
    }
  }
}

// Example usage
let selfMadeLinkedList: HomemadeLinkedList = new HomemadeLinkedList();
console.log('size is:' + selfMadeLinkedList.getSize());
selfMadeLinkedList.addLast(15);
selfMadeLinkedList.addLast(30);
selfMadeLinkedList.addLast(45);
selfMadeLinkedList.addFirst(1);
console.log('size is:' + selfMadeLinkedList.getSize());
selfMadeLinkedList.printList();
console.log(selfMadeLinkedList.indexOf(45));
console.log(selfMadeLinkedList.indexOf(400));
console.log(selfMadeLinkedList.containsFull(500));
console.log(selfMadeLinkedList.containsFull(45));
console.log(selfMadeLinkedList.containsImproved(1));
console.log(selfMadeLinkedList.containsImproved(400));
selfMadeLinkedList.deleteFirst();
selfMadeLinkedList.deleteLast();
selfMadeLinkedList.printList();
console.log('size is:' + selfMadeLinkedList.getSize());
