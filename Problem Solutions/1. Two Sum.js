/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsLen = nums.length,
    mapObj = {};
  for (let i = 0; i < numsLen; i++) {
    mapObj[nums[i]] = i;
  }

  let diff;
  for (let i = 0; i < numsLen - 1; i++) {
    diff = target - nums[i];
    if (mapObj.hasOwnProperty(diff) && mapObj[diff] !== i) {
      return [i, mapObj[diff]];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

/**
 * Time Complexity = O(n)
 */