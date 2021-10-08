/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const numsLen = nums.length, result = [];
    let found, num;
    for (let i = 0; i < numsLen; i++) {
        num = i + 1, found = false;
        for (let j = 0; j < numsLen; j++) {
            if (nums[j] === num) {
                found = true;
                break;
            }
        }

        if (!found) {
            result.push(num);
        }
    }
    return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));

/**
 * Time complexity = O(n^2)
 * Space complexity = O(n)
 */
