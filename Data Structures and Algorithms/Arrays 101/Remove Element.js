/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    const numsLen = nums.length;
    let writeIndex = 0;
    for (let readIndex = 0; readIndex < numsLen; readIndex++) {
        if (nums[writeIndex] === val && nums[readIndex] !== val) {
            [nums[writeIndex], nums[readIndex]] = [nums[readIndex], nums[writeIndex]]
        }
        if (nums[writeIndex] !== val) {
            writeIndex++;
        }
    }
    return writeIndex;
};

console.log(removeElement([3, 2, 2, 3, 3, 3, 2, 2], 3));

/**
 * Time Complexity = O(n)
 * Space Complexity = O(1)
 */
