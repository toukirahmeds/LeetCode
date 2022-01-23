/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let numsLen = nums.length;
  let current,
    next,
    i = 0;
  while (i < numsLen) {
    (current = nums[i]), (next = nums[i + 1]);
    if (current === next) {
      for (let k = i + 1; k < numsLen; k++) {
        nums[k] = nums[k + 1];
      }
      numsLen--;
    } else {
      i++;
    }
  }
  return numsLen;
};

/**
 * Time Complexity = O(n^2), where n is the number of items in the `nums` array.
 */
