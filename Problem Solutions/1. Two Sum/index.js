/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hashTable = {};
  let diff;
  for (let i = 0; i < nums.length; i++) {
    diff = target - nums[i];
    if (hashTable.hasOwnProperty(diff)) {
      return [hashTable[diff], i];
    }
    hashTable[nums[i]] = i;
  }
};

console.log(twoSum([3, 3], 6));

/**
 * Time Complexity = O(n)
 * where n is the number of items in the `nums` array.
 */
