/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    const numsLen = nums.length;
    let writeIndex = 0;
    for (let readIndex = 0; readIndex < numsLen; readIndex++) {
        if (nums[readIndex] % 2 === 0) {
            if (nums[writeIndex] !== 0) {
                [nums[writeIndex], nums[readIndex]] = [nums[readIndex], nums[writeIndex]];
            }
            writeIndex++;
        }
    }
    return nums;
};

console.log(sortArrayByParity([1, 2, 3, 4, 5, 6, 10, 12]));

/**
 * Time Complexity = O(n)
 * Space Complexity = O(1)
 */
