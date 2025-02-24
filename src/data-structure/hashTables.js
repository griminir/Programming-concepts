"use strict";
// hash tables are called objects in javascript, hashmaps in java, dictionaries in python and assosiative arrays in php
// insert O(1)
// lookup O(1)
// delete O(1)
// other operations are containskey O(1) and containsvalue O(n)
function findFirstNonRepeatedChar(input) {
    let map = new Map();
    let string = input.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (map.has(string[i])) {
            let value = map.get(string[i]);
            map.set(string[i], value + 1);
        }
        else {
            map.set(string[i], 1);
        }
    }
    for (let [key, value] of map) {
        if (value === 1) {
            return key;
        }
    }
    return null;
}
const result = findFirstNonRepeatedChar('a green apple'); // g
console.log(result);
// sets are like arrays but they cannot have duplicates
// sets work like hash tables but only have keys
function removeDuplicates(input) {
    return [...new Set(input)];
}
const result2 = removeDuplicates([1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 9]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(result2);
function findFirstRepeatedChar(input) {
    let set = new Set();
    let string = input.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (set.has(string[i])) {
            return string[i];
        }
        else {
            set.add(string[i]);
        }
    }
    return null;
}
const result3 = findFirstRepeatedChar('green apple'); // e
console.log(result3);
