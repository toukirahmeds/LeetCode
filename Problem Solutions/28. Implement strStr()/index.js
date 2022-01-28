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

  for (let i = 0; i < haystack.length; i++) {
    if (
      haystack[i] === needle[0] &&
      haystack.slice(i, i + needle.length).localeCompare(needle) === 0
    ) {
      return i;
    }
  }

  return -1;
};

/**
 * Time Complexity = O(nlogn), where n is the length of the `haystack` string
 */
