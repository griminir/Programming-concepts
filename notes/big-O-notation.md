# Big O notation

- Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity.

- It is used to describe how the runtime of an algorithm grows as the input size grows.

- Certain algorithms are more efficient than others, and Big O notation is a way to compare them.

### O(1) - Constant time complexity

```javascript
function printStuff {console.log(array[0])}
```

- the size of the input does not affect the runtime of the algorithm
- If we dubplicate the size of the input, the runtime of the algorithm will not change.
- It's still O(1) and not O(2) even though the input size has doubled.

```javascript
function printStuff {
  console.log(array[0])
  console.log(array[0])
}
```

### O(n) - Linear time complexity

### O(n^2) - Quadratic time complexity

### O(log n) - Logarithmic time complexity

