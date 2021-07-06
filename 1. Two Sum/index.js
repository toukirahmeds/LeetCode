/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numsLen = nums.length;
  const numsDict = {};
  let numValue;
  for (let i = 0; i < numsLen; i++) {
    numValue = nums[i];
    if (numsDict.hasOwnProperty(numValue)) {
      numsDict[numValue].push(i);
    } else {
      numsDict[numValue] = [i];
    }
  }

  let remainder, secondNumberIndex;
  for (let i = 0; i < numsLen - 1; i++) {
    remainder = target - nums[i];
    if (numsDict.hasOwnProperty(remainder)) {
      secondNumberIndex = numsDict[remainder].find(elem => elem !== i);
      if (secondNumberIndex > -1) {
        return [i, secondNumberIndex];
      }
    }
  }
};


console.log(twoSum([3, 3], 6));
// Time Complexity = n + n(1 + k) = n + nk = n(1 + k)
