/*
Challenge 1
A) Create a for loop that iterates through an array and returns the sum of the elements of the array.
B) Create a functional iterator for an array that returns each value of the array when called, one element at a time.
*/

// CHALLENGE 1

function sumFunc(arr) {
  // YOUR CODE HERE
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Uncomment the lines below to test your work
const array = [1, 2, 3, 4];
// console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  var i = 0;
  function iterator() {
    return arr[i++];
  }
  return iterator;
}

// Uncomment the lines below to test your work
const array2 = ["a", "b", "c", "d"];
const myIterator = returnIterator(array2);
// console.log(myIterator()); // -> should log 'a'
// console.log(myIterator()); // -> should log 'b'
// console.log(myIterator()); // -> should log 'c'
// console.log(myIterator()); // -> should log 'd'

/*
Challenge 2
Create an iterator with a next method that returns each value of the array when .next is called.
*/

function nextIterator(arr) {
  var i = 0;
  return {
    next() {
      return arr[i++];
    },
  };
}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next()); // -> should log 1
// console.log(iteratorWithNext.next()); // -> should log 2
// console.log(iteratorWithNext.next()); // -> should log 3

/*
Challenge 3
Write code to iterate through an entire array using your nextIterator and sum the values.
*/

function sumArray(arr) {
  // YOUR CODE HERE
  // use your nextIterator function
  var iterator = nextIterator(arr);
  var sum = 0;
  while (true) {
    let v = iterator.next();
    if (!v) break;
    sum += v;
  }
  return sum;
}

// Uncomment the lines below to test your work
const array4 = [1, 2, 3, 4];
// console.log(sumArray(array4)); // -> should log 10

/*
Challenge 4
Create an iterator with a next method that returns each value of a set when .next is called
*/

function setIterator(set) {
  // YOUR CODE HERE
  return nextIterator([...set]);
}

// Uncomment the lines below to test your work
const mySet = new Set("hey");
const iterateSet = setIterator(mySet);
// console.log(iterateSet.next()); // -> should log 'h'
// console.log(iterateSet.next()); // -> should log 'e'
// console.log(iterateSet.next()); // -> should log 'y'

/*
Challenge 5
Create an iterator with a next method that returns an array with two elements (where the first element is the index and the second is the value at that index) when .next is called.
*/

function indexIterator(arr) {
  // YOUR CODE HERE
  var i = 0;
  return {
    next() {
      return [i, arr[i++]];
    },
  };
}

// Uncomment the lines below to test your work
const array5 = ["a", "b", "c", "d"];
const iteratorWithIndex = indexIterator(array5);
console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']
