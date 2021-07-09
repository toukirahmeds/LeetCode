/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let numsLen = nums.length;
    for(let i = 0; i < numsLen; ) {
        if(nums[i] === val) {
            for(let j = i; j < numsLen - 1; j++) {
                nums[j] = nums[j+1];
            }
            numsLen--;
        } else {
            i++;
        }
    }

    return numsLen;
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2));

/**
 * Time Complexity = O(n^2)
 */
