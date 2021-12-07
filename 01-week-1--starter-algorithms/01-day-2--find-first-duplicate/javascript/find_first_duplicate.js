//given an array, find the first duplicate and return its value. If no duplicate is found, return -1

function findFirstDuplicate(arr) {
  // use a set to track the seen values
  let hash = new Set();

  for (let i = 0; i < arr.length; i++) {
    //if we have seen the current value, return it
    if (hash.has(arr[i])) {
      return arr[i];
    }
    //otherwise, add it to the set
    hash.add(arr[i]);
  }

  //if we never return a value in the loop, return -1
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
