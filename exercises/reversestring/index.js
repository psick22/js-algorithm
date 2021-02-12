// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   //   answer 1:
//   //   const arr = str.split('');
//   //   arr.reverse();
//   //   return arr.join('');

//   //   answer 2:

//   return str.split('').reverse().join('');
// }

// answer 3
// function reverse(str) {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// answer 4
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('adkdf');

module.exports = reverse;
