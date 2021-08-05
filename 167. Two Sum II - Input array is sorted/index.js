/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const numbersLen = numbers.length;
    for (let i = 0; i < numbersLen - 1; i++) {
        for (let j = i + 1; j < numbersLen; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1];
            }
        }
    }
};

console.log(twoSum([-1, 0], -1));

/**
 * Time Complexity = O(n^2)
 * where n is the number of elements in the array 'numbers'.
 */
