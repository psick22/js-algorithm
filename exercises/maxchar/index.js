// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';
  for (let char of str) {
    charMap[char] ? charMap[char]++ : (charMap[char] = 1);
  }

  // 오브젝트 반복은 for.. in
  // for (let char in charMap) {
  //   if (charMap[char] > max) {
  //     max = charMap[char];
  //     maxChar = char;
  //   }
  // }

  for (const [key, value] of Object.entries(charMap)) {
    if (value > max) {
      max = value;
      maxChar = key;
    }
  }

  return maxChar;
}

module.exports = maxChar;
