/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const sSplitted = s.trim().split(" ");
    return sSplitted[sSplitted.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));

/**
 * Time Complexity = O(n)
 * where n is the length of string parameter "s"
 */
