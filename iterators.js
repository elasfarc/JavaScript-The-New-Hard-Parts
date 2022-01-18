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
// console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
// console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
// console.log(iteratorWithIndex.next()); // -> should log [2, 'c']

/*
Challenge 6
Create an iterator that returns each word from a string of words on the call of its .next method (hint: use regex!)
Then attach it as a method to the prototype of a constructor Words. Hint: research Symbol.iterator!
*/

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function () {
  // YOUR CODE HERE
  var wordsArr = this.str.split(" ");
  var i = 0;
  return {
    next() {
      return {
        value: wordsArr[i++],
        done: !(i < wordsArr.length),
      };
    },
  };
};

// Uncomment the lines below to test your work
// const helloWorld = new Words("Hello World ");
// for (let word of helloWorld) {
//   console.log(word);
// } // -> should log 'Hello' and 'World'

/*
Build a function that walks through an array and returns the element concatenated with the string "was found after index x", where x is the previous index.
Note: if it is the first element it should say that it is the first

*/
function valueAndPrevIndex(array) {
  var i = 0;
  return {
    sentence() {
      var str = `${array[i]} ${
        i > 0 ? `was found after index ${i - 1}` : "it is the first"
      }`;
      i++;
      return str;
    },
  };
}

const returnedSentence = valueAndPrevIndex([4, 5, 6]);
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
