function reverseString(str) {
  // initialize empty string for solution
  let reverse = "";

  //loop over `str` backwards
  for (let i = str.length - 1; i >= 0; i--) {
    //add the current character to `reverse`
    reverse += str[i]
  }
  //return `reverse`
  return reverse;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
