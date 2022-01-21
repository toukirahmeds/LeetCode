/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  let currentChar, topItem;

  for (let i = 0; i < s.length; i++) {
    currentChar = s[i];
    topItem = stack[stack.length - 1];

    if (
      (currentChar === ")" && topItem === "(") ||
      (currentChar === "}" && topItem === "{") ||
      (currentChar === "]" && topItem === "[")
    ) {
      stack.pop();
    } else if (
      (currentChar === ")" && topItem !== "(") ||
      (currentChar === "}" && topItem !== "{") ||
      (currentChar === "]" && topItem !== "[")
    ) {
      return false;
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
};

console.log(isValid("{[()]}{[]}"));

/**
 * Time Complexity = O(n), where n is the length of the input string.
 */
