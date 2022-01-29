/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let i = 0;

  while (nums[i] < target) {
    i++;
  }

  return i;
};

/**
 * Time Complexity = O(n), where n is the length of `nums` array
 */
