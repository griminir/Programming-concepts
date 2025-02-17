"use strict";
let arrayToSort = [5, 3, 8, 4, 2, 1, 9, 7, 6];
// Bubble Sort
function BubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
console.log(BubbleSort(arrayToSort));
// explenation of bubble sort
// Bubble sort is a simple sorting algorithm that repeatedly steps through the array, compares each pair of adjacent items and swaps them if they are in the wrong order (in this case, the ascending order). The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.
