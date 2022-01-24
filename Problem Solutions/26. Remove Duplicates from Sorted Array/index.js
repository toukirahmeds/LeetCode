/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let total = nums.length;
  let i = 0,
    j;
  while (i < total - 1) {
    j = i + 1;
    while (nums[i] === nums[j] && j < total) {
      j++;
      total--;
    }
    if (i + 1 !== j) {
      for (let k = i + 1; k < total; k++) {
        nums[k] = nums[j++];
      }
    }

    if (nums[i] !== nums[i + 1]) {
      i++;
    }
  }
  return total;
};

console.log(
  removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5])
);

/**
 * Time Complexity = O(nlogn), where n is the number of items in the `nums` array.
 */
