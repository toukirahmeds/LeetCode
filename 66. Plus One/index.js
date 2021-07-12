/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const digitsLen = digits.length;
    let adder = 1, currentSum = 0;
    for (let i = digitsLen - 1; i >= 0; i--) {
        currentSum = digits[i] + adder;
        digits[i] = currentSum > 9 ? currentSum - 10 : currentSum;
        adder = currentSum > 9 ? currentSum - 9 : 0;
    }
    if(adder > 0) {
        digits.unshift(adder);
    }
    return digits;
};

console.log(plusOne([9,9]));
/**
 * Time Complexity = O(n)
 */