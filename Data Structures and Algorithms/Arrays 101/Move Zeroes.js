/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    const numsLen = nums.length;
    let writeIndex = 0;
    for (let readIndex = 0; readIndex < numsLen; readIndex++) {
        if (nums[readIndex] !== 0) {
            if (nums[writeIndex] === 0) {
                [nums[writeIndex], nums[readIndex]] = [nums[readIndex], nums[writeIndex]];
            }
            writeIndex++;
        }
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12, 100, 5, 0, 0, 12]));
