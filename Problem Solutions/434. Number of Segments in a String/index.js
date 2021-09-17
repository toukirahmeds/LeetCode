/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    const sLen = s.length;
    let count = 0, prev = " ";
    for (let i = 0; i < sLen; i++) {
        if (prev === " " && s[i] !== " ") {
            count++;
        }
        prev = s[i];
    }
    return count;
};

console.log(countSegments(""));

/**
 * Time complexity = O(n)
 * where n is the number of characters in string parameter 's'.
 */
