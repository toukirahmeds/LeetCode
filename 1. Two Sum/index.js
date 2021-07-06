/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsLen = nums.length;
  const numsDict = {};
  let remainder, numValue;
  for (let i = 0; i < numsLen; i++) {
    numValue = nums[i];
    remainder = target - numValue;
    if (numsDict.hasOwnProperty(remainder)) {
      return [numsDict[remainder], i];
    } else {
      numsDict[numValue] = i;
    }
  }
};


console.log(twoSum([2, 7, 11, 15], 9));
// Time Complexity = n log n
