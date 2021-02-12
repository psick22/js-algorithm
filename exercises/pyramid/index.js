// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   const mid = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let str = '';
//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (col >= mid - row && col <= mid + row) {
//         str += '#';
//       } else {
//         str += ' ';
//       }
//     }
//     console.log(str);
//   }
// }
function pyramid(n, row = 0, col = 0, str = '') {
  const len = 2 * n - 1;
  const mid = Math.floor((2 * n - 1) / 2);
  if (row === n) {
    return;
  }
  if (col === len) {
    console.log(str);
    return pyramid(n, row + 1);
  }
  if (col < len) {
    if (col >= mid - row && col <= mid + row) {
      str += '#';
    } else {
      str += ' ';
    }
    return pyramid(n, row, col + 1, str);
  }
}

pyramid(50);
module.exports = pyramid;
