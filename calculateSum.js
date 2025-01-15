function calculateSum(a, b) {
  console.log(a + b);
}

var x = 10;

module.exports = { x, calculateSum}; 

// or we can export something like this
// module.exports.x = x;