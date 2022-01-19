/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const xStr = x.toString();
  const len = xStr.length;
  for (let i = 0, j = len - 1; i < j; i++, j--) {
    if (xStr[i] !== xStr[j]) {
      return false;
    }
  }
  return true;
};

/**
 * Time Complexity = O(n), where n is the number of digits/symbols in the given integer.
 */
