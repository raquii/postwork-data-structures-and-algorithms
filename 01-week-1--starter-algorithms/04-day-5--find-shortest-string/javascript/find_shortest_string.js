function findShortestString(arr) {
  // type your code here
  let smStr = arr[0];

  for (i = 1; i < arr.length; i++) {
    smStr = smStr.length <= arr[i].length ? smStr : arr[i];
  }

  return smStr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push("" + Math.random());
  }

  const startTime = Date.now();

  for (let i = 0; i < 1000; i++) {
    findShortestString(['cat', 'hi', 'dog', 'an']);
    findShortestString(longInput);
  }

  const avgRuntime = (Date.now() - startTime) / 2000;

  console.log("Average Runtime =>", avgRuntime);
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
