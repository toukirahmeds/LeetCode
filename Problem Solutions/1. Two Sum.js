/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  const numsLen = nums.length, mapObj = {};
  let diff;
  for(let i = 0; i < numsLen; i++) {
      diff = target - nums[i];
      if(mapObj.hasOwnProperty(diff)) {
          return [mapObj[diff], i];
      }
      
      mapObj[nums[i]] = i;
  }
};

console.log(twoSum([3,3], 6));

/**
 * Time Complexity = O(n)
 */