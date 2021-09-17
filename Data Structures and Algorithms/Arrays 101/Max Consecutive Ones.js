/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    const numsLen = nums.length;
    let maxConsecutives = 0, countConsecutives = 0, currentNum;
    for (let i = 0; i < numsLen; i++) {
        currentNum = nums[i];
        if (currentNum === 1) {
            countConsecutives++;
        }

        if (currentNum === 0 || i === numsLen - 1) {
            if (countConsecutives > maxConsecutives)
                maxConsecutives = countConsecutives;
            countConsecutives = 0;
        }
    }
    return maxConsecutives;
};

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));