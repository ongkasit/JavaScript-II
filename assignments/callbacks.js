// Create a higher order function and invoke the callback function to test your work. 
// You have been provided an example of a problem and a solution to see how this works with our items array.  
// Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

//Higher Order Function
const getLength = function(arr, cb) {
    // getLength passes the length of the array into the callback.
    //Callback Function
    cb(arr.length)
};

getLength(items, function(length) {
    console.log(length)
});


const last = (arr, cb) => {
    // last passes the last item of the array into the callback.
    cb(arr[arr.length - 1]);
}

last(items, (lastItem) => {
    console.log(lastItem);
});



const sumNums = (x, y, cb) => {
    // sumNums adds two numbers (x, y) and passes the result to the callback.
    cb(x + y);
}

sumNums(4, 5, (add) => {
    console.log(add);
});

function multiplyNums(x, y, cb) {
    // multiplyNums multiplies two numbers and passes the result to the callback.
    cb(x * y);
}

multiplyNums(89, 24, (multiply) => {
    console.log(multiply);
});


// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.

function contains(item, list, cb) {
    if (list.includes(item)) {
        return cb(true);
    } else {
        return cb(false);
    }
};

contains('Pencil', items, (success) => {
    console.log(success);
});


/* STRETCH PROBLEM */

// removeDuplicates removes all duplicate values from the given array.
// Pass the duplicate free array to the callback function.
// Do not mutate the original array.

const fruits = ['Banana', 'Apple', 'Kiwi', 'Banana', 'Banana'];

const removeDuplicate = fruits.filter((item, index) => fruits.indexOf(item) === index);

console.log(removeDuplicate);