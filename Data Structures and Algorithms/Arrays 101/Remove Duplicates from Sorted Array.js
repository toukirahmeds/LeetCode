/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let numsLen = nums.length;
    for (let i = 0; i < numsLen - 1;) {
        if (nums[i] === nums[i + 1]) {
            for (let j = i + 1; j < numsLen - 1; j++) {
                nums[j] = nums[j + 1];
            }
            numsLen--;
        } else {
            i++;
        }
    }
    return numsLen;
};

console.log(removeDuplicates([1,1,2]));
