"use strict";
let intArrray = [1, 2, 3, 4, 5];
// lookup by index O(1)
// push O(1) inserting at the end of the array
// pop O(1) removing the last element of the array
// splice O(n) for insering or removing elements from the middle of the array or the beginning
// shift O(n) removing the first element of the array
// unshift O(n) inserting at the beginning of the array
class HomemadeArray {
    constructor(lenght) {
        this.items = [];
        this.count = 0;
        this.items = new Array(lenght);
    }
    print() {
        for (let i = 0; i < this.count; i++) {
            console.log(this.items[i]);
        }
    }
    insert(item) {
        this.items[this.count] = item;
        this.count++;
    }
    removeAt(index) {
        if (index < 0 || index >= this.count) {
            throw new Error('Index out of bounds');
        }
        for (let i = index; i < this.count; i++) {
            this.items[i] = this.items[i + 1];
        }
        this.count--;
    }
    indexOf(item) {
        for (let i = 0; i < this.count; i++) {
            if (this.items[i] === item) {
                return i;
            }
        }
        return -1;
    }
    max() {
        let max = this.items[0];
        for (let i = 1; i < this.count; i++) {
            if (this.items[i] > max) {
                max = this.items[i];
            }
        }
        return max;
    }
}
let selfMadeArray = new HomemadeArray(3);
selfMadeArray.insert(10);
selfMadeArray.insert(20);
selfMadeArray.insert(30);
selfMadeArray.insert(40);
selfMadeArray.removeAt(1);
selfMadeArray.print();
console.log(selfMadeArray.indexOf(30));
