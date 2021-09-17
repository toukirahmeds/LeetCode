/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    const numsLen = nums.length;
    let currentNum;
    for (let i = 0; i < numsLen; i++) {
        currentNum = nums[i];
        nums[i] = currentNum ** 2;
    }

    let isSwapped = false
    for (let i = 0; i < numsLen - 1; i++) {
        isSwapped = false;
        for (let j = 0; j < numsLen - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }

    return nums;
};

console.log(sortedSquares([10, 9, 8, 7]));
