// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// answer 1:
// function anagrams(stringA, stringB) {
//   stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
//   const objA = {};
//   const objB = {};
//   for (let char of stringA) {
//     objA[char] ? objA[char] + 1 : (objA[char] = 1);
//   }
//   for (let char of stringB) {
//     objB[char] ? objB[char] + 1 : (objB[char] = 1);
//   }
//   let answer = true;
//   if (Object.keys(objA).length === Object.keys(objB).length) {
//     for (const [key, value] of Object.entries(objA)) {
//       if (objB[key] === value) {
//         answer = true;
//       } else {
//         answer = false;
//         break;
//       }
//     }
//   } else {
//     answer = false;
//   }

//   return answer;
// }

// answer 2:
// function anagrams(stringA, stringB) {
//   const charMapA = createCharMap(stringA);
//   const charMapB = createCharMap(stringB);

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }

//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function createCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// answer 3:
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

anagrams('rail safety', 'fairy tales');
module.exports = anagrams;
