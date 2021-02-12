// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   const fibArr = [];
//   for (let i = 0; i <= n; i++) {
//     if (i === 0 || i === 1) {
//       fibArr.push(i);
//     } else {
//       let a = fibArr[i - 2] + fibArr[i - 1];
//       fibArr.push(a);
//     }
//   }
//   return fibArr[n];
// }
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
fib = memoize(fib);

console.log(fib(50));

module.exports = fib;
