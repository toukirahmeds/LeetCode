/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let lastIndex = nums.length - 1;
  for (let i = 0; i <= lastIndex; i++) {
    while (nums[lastIndex] === val) {
      lastIndex--;
    }
    if (nums[i] === val && i < lastIndex) {
      nums[i] = nums[lastIndex];
      lastIndex--;
    }
  }
  return lastIndex + 1;
};

/**
 * Time Complexity = O(n), where n is the length of `nums` array
 */
