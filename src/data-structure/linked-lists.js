'use strict';
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
  constructor(value) {
    this.next = null;
    this.value = value;
  }
  getValue() {
    return this.value;
  }
  getNext() {
    return this.next;
  }
  setNext(node) {
    this.next = node;
  }
}
class HomemadeLinkedList {
  constructor() {
    this.first = null;
    this.last = null;
  }
  isEmpty() {
    return this.first === null;
  }
  addLast(item) {
    var _a;
    let node = new LinkedNode(item);
    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      (_a = this.last) === null || _a === void 0 ? void 0 : _a.setNext(node);
      this.last = node;
    }
  }
  addFirst(item) {
    let node = new LinkedNode(item);
    if (this.isEmpty()) this.first = this.last = node;
    else {
      node.setNext(this.first);
      this.first = node;
    }
  }
  indexOf(item) {
    let index = 0;
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
  containsFull(item) {
    let current = this.first;
    while (current !== null) {
      if (current.getValue() === item) return true;
      current = current.getNext();
    }
    return false;
  }
  containsImproved(item) {
    return this.indexOf(item) !== -1;
  }
  deleteFirst() {
    var _a;
    if (this.first !== null) {
      let second = this.first.getNext();
      (_a = this.first) === null || _a === void 0 ? void 0 : _a.setNext(null);
      this.first = second;
    }
  }
  // Print the list
  printList() {
    let current = this.first;
    while (current !== null) {
      console.log(current.getValue());
      current = current.getNext();
    }
  }
}
// Example usage
let selfMadeLinkedList = new HomemadeLinkedList();
selfMadeLinkedList.addLast(15);
selfMadeLinkedList.addLast(30);
selfMadeLinkedList.addLast(45);
selfMadeLinkedList.addFirst(1);
selfMadeLinkedList.printList();
console.log(selfMadeLinkedList.indexOf(45));
console.log(selfMadeLinkedList.indexOf(400));
console.log(selfMadeLinkedList.containsFull(500));
console.log(selfMadeLinkedList.containsFull(45));
console.log(selfMadeLinkedList.containsImproved(1));
console.log(selfMadeLinkedList.containsImproved(400));
selfMadeLinkedList.deleteFirst();
selfMadeLinkedList.printList();
