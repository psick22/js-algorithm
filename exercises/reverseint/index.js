// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   let sign = Math.sign(n);
//   const arr = n.toString().split('');
//   if (sign === -1) {
//     arr[0] = '';
//   }
//   let reversed = parseInt(arr.reverse().join(''));
//   if (sign === -1) {
//     return -reversed;
//   } else {
//     return reversed;
//   }
// }
function reverseInt(n) {
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

module.exports = reverseInt;
