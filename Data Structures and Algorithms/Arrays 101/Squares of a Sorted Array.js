/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    const numsLen = nums.length;
    for (let i = 0; i < numsLen; i++) {
        nums[i] = nums[i] ** 2;
    }

    for (let i = 0; i < numsLen - 1; i++) {
        for (let j = i + 1; j < numsLen; j++) {
            if (nums[i] > nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    }

    return nums;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));

/**
 * Time Complexity = O(n^2)
 * Space Complexity = O(1)
 */
