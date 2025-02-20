"use strict";
// a linked list contains 2 pieces of data. The value and the Address of the next node in the linked list
// first node is called head and last node is called tail
// lookup by value O(n)
// lookup by index O(n)
// insertion at the tail and at the head is O(1)
// insertion in the middle is O(n)
// deleting from the end is O(n) or O(1) in a doubly linked list
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
        this.size = 0;
    }
    isEmpty() {
        return this.first === null;
    }
    addLast(item) {
        var _a;
        let node = new LinkedNode(item);
        if (this.isEmpty()) {
            this.first = this.last = node;
        }
        else {
            (_a = this.last) === null || _a === void 0 ? void 0 : _a.setNext(node);
            this.last = node;
        }
        this.size++;
    }
    addFirst(item) {
        let node = new LinkedNode(item);
        if (this.isEmpty())
            this.first = this.last = node;
        else {
            node.setNext(this.first);
            this.first = node;
        }
        this.size++;
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
            if (current.getValue() === item)
                return true;
            current = current.getNext();
        }
        return false;
    }
    containsImproved(item) {
        return this.indexOf(item) !== -1;
    }
    deleteFirst() {
        var _a;
        if (this.isEmpty())
            throw new Error('list is already empty');
        if (this.first === this.last) {
            this.first = this.last = null;
            this.size--;
            return;
        }
        if (this.first !== null) {
            let second = this.first.getNext();
            (_a = this.first) === null || _a === void 0 ? void 0 : _a.setNext(null);
            this.first = second;
        }
        this.size--;
    }
    getPreviousNode(node) {
        let current = this.first;
        while (current !== null) {
            if (current.getNext() === node)
                return current;
            current = current.getNext();
        }
        return null;
    }
    deleteLast() {
        var _a;
        if (this.isEmpty())
            throw new Error('list is empty');
        if (this.first === this.last) {
            this.first = this.last = null;
        }
        else {
            let previous = this.getPreviousNode(this.last);
            this.last = previous;
            (_a = this.last) === null || _a === void 0 ? void 0 : _a.setNext(null);
        }
        this.size--;
    }
    getSize() {
        return this.size;
    }
    toArray() {
        let array = new Array(this.size);
        let current = this.first;
        let index = 0;
        while (current !== null) {
            array[index] = current.getValue();
            index++;
            current = current.getNext();
        }
        return array;
    }
    reverse() {
        if (this.isEmpty())
            return;
        let previous = null;
        let current = this.first;
        while (current !== null) {
            let next = current.getNext();
            current.setNext(previous);
            previous = current;
            current = next;
        }
        this.first = previous;
    }
    getNodeXfromTheEnd(x) {
        if (this.isEmpty())
            throw new Error('list is empty');
        let mark = this.first;
        let end = this.first;
        for (let i = 0; i < x - 1; i++) {
            end = end === null || end === void 0 ? void 0 : end.getNext();
            if (end === null)
                throw new Error('list is not long enough');
        }
        while (end != this.last) {
            mark = mark === null || mark === void 0 ? void 0 : mark.getNext();
            end = end === null || end === void 0 ? void 0 : end.getNext();
        }
        return mark === null || mark === void 0 ? void 0 : mark.getValue();
    }
    printMiddle() {
        var _a;
        let current = this.first;
        let middle = this.first;
        while (current !== this.last && (current === null || current === void 0 ? void 0 : current.getNext()) !== this.last) {
            if (current !== null) {
                current = current.getNext();
                current = current === null || current === void 0 ? void 0 : current.getNext();
                middle = middle === null || middle === void 0 ? void 0 : middle.getNext();
            }
            if (current === this.last)
                console.log(middle === null || middle === void 0 ? void 0 : middle.getValue());
            else
                console.log((middle === null || middle === void 0 ? void 0 : middle.getValue()) + ',' + ((_a = middle === null || middle === void 0 ? void 0 : middle.getNext()) === null || _a === void 0 ? void 0 : _a.getValue()));
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
let array = selfMadeLinkedList.toArray();
console.log(array.toString());
console.log(Array.isArray(array));
selfMadeLinkedList.addLast(45);
selfMadeLinkedList.addLast(60);
selfMadeLinkedList.reverse();
selfMadeLinkedList.printList();
selfMadeLinkedList.reverse();
selfMadeLinkedList.printList();
console.log(selfMadeLinkedList.getNodeXfromTheEnd(3));
selfMadeLinkedList.printMiddle(); // should print 30,45
selfMadeLinkedList.addLast(75);
selfMadeLinkedList.printMiddle(); // should print 45
// singley linked list take less space
// doubly linked lists take more space but give some faster runtime on some operations
// example deleting from the end in singley linked list is O(n) while in a doubly linked list it's O(1)
// we can make a linked list circular so that the last node ref the first node
// example if for a music repeate feature
// linked list take up more memory the an array
// grow and shrink as needed compared to a static array
