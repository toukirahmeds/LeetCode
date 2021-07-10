/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    const numsLength = nums.length;
    let i = 0, currentNum;
    while(i < numsLength) {
        currentNum = nums[i];
        if(currentNum === target || currentNum > target) {
            return i;
        }
        i++;
    }

    return i;
};

console.log(searchInsert([1], 0));

/**
 * Time Complexity = O(n)
 */