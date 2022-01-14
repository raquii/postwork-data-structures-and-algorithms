function fibonacci(num) {
  let fibSeq = [0, 1];

  for (let i = 0; i < num; i++) {
    let sum = fibSeq[0] + fibSeq[1];
    fibSeq = [fibSeq[1], sum]
  }

  return fibSeq[0];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("Expecting: 8");
  console.log("=>", fibonacci(6));

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
