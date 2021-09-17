/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    const numsLen = nums.length;
    let currentNumStr, evenCount = 0;
    for(let i = 0; i < numsLen; i++) {
        currentNumStr = nums[i].toString();
        if(currentNumStr.length % 2 === 0) {
            evenCount++;
        }
    }
    
    return evenCount;
};

console.log(findNumbers([12,345,2,6,7896]));
