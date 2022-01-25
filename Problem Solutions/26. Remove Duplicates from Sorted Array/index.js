/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let total = nums.length,
    currentIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (currentIndex !== i) {
      if (nums[currentIndex] === nums[i]) {
        total--;
      } else {
        nums[++currentIndex] = nums[i];
      }
    }
  }
  return total;
};

/**
 * Time Complexity = O(n), where n is the number of items in the `nums` array.
 */
