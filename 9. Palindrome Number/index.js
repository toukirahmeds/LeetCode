/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const originalStr = x.toString();
    const reversedStr = originalStr.split("").reverse().join("");
    return originalStr.localeCompare(reversedStr) === 0;
};

console.log(isPalindrome(-101));

/**
 * Time Complexity = O(1)
 */