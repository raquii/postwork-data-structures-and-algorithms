function selectionSort(arr) {
  // type your code here
  const solve = [];

  while (arr.length) {
    let small = Math.min(...arr);
    solve.push(small);

    let i = arr.indexOf(small);
    arr.splice(i, 1);
  }

  return solve;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const startTime = Date.now();

  for (let i = 0; i < 1000; i++) {
    selectionSort([2, 4, -1, 3, 0]);
    selectionSort(longInput);
  }

  const avgRuntime = (Date.now() - startTime) / 2000;

  console.log("Average Runtime =>", avgRuntime);
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
