/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsLen = nums.length;
  for(let i = 0; i < numsLen - 1; i++) {
    for(let j = i + 1; j < numsLen; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};


console.log(twoSum([3,3], 6))
