/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) {
    return 0;
  } else if (!haystack) {
    return -1;
  }

  let matched = false;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      matched = true;
      for (let j = 1; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          matched = false;
          break;
        }
      }

      if (matched) {
        return i;
      }
    }
  }

  return -1;
};

/**
 * Time Complexity = O(n^2), where n is the length of the `haystack` string
 */
