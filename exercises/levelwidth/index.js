// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
function levelWidth(root) {
  const arr = [root, 'EOD']; //End Of Depth
  let counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();
    if (node === 'EOD') {
      counters.push(0);
      arr.push('EOD');
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

// function levelWidth(root) {
//   const arr = [root];
//   let length = arr.length;
//   let levelWidth = [];
//   let nextDepth = [];

//   while (arr.length) {
//     levelWidth.push(arr.length);
//     for (let i = 0; i < length; i++) {
//       const node = arr.shift();
//       nextDepth.push(...node.children);
//     }
//     while (nextDepth.length) {
//       arr.push(...nextDepth);
//       length = arr.length;
//       nextDepth = [];
//     }
//   }
//   return levelWidth;
// }

module.exports = levelWidth;
