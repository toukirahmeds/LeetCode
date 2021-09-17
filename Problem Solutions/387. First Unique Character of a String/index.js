/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const countDict = {}, sLen = s.length;
    let currentChar;
    for (let i = 0; i < sLen; i++) {
        currentChar = s[i];
        if (countDict.hasOwnProperty(currentChar)) {
            countDict[currentChar]++;
        } else {
            countDict[currentChar] = 1;
        }
    }

    for (let i = 0; i < sLen; i++) {
        currentChar = s[i];
        if (countDict[currentChar] === 1) {
            return i;
        }
    }
    return -1;
};

console.log(firstUniqChar("aabb"));

/**
 * Time Complexity = O(n)
 * where n is the length of the string paramater 's'
 */
