/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    const doubleK = k * 2, sLen = s.length, sArr = s.split("");
    let currentArrReversed;
    for (let i = 0; i < sLen; i += doubleK) {
        currentArrReversed = sArr.slice(i, i + k).reverse();
        sArr.splice(i, k, ...currentArrReversed);
    }

    return sArr.join("");
};

console.log(reverseStr("abcdefghijklmnop", 3));

/**
 * Time Complexity = O(n)
 * where n is the length of the string parameter 's'
 */
