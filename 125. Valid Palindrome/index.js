/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const mergedStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedStr = mergedStr.split("").reverse().join("");
    return mergedStr.localeCompare(reversedStr) === 0;
};

console.log(isPalindrome("race a car"));

/**
 * Time Complexity = O(n)
 * where n is the length of the string
 */