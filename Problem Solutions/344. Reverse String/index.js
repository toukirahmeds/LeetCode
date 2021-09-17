/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    const sLen = s.length;
    const half = Math.round(sLen / 2);
    let j = sLen - 1;
    for (let i = 0; i < half; i++) {
        [s[i], s[j]] = [s[j], s[i]];
        j--;
    }
};

const s = ["H", "a", "n", "n", "a", "h"];
reverseString(s)
console.log(s);

/**
 * Time Complexity = O(n)
 * where n is the length of input array 's'
 */
