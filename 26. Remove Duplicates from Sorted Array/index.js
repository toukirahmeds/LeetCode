/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const numsDict = {};
    let numsLen = nums.length, currentNum;
    
    for(let i = 0; i < numsLen;) {
        currentNum = nums[i];
        if(numsDict.hasOwnProperty(currentNum)) {
            for(let j = i; j < numsLen - 1; j++) {
                nums[j] = nums[j+1];
            }
            numsLen--;
        } else {
            numsDict[currentNum] = currentNum;
            i++;
        }
    }
    
    return numsLen;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));

/**
 * Time Complexity = n * n = O(n^2)
 */