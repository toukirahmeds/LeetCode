/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    const sLen = s.length;
    let lateCount = 0, absentCount = 0, currentChar;
    for (let i = sLen - 1; i >= 0; i--) {
        currentChar = s[i];

        if (currentChar === "L") {
            lateCount++;
        } else {
            lateCount = 0;
        }

        if (lateCount >= 3) {
            return false;
        }

        if (currentChar === "A") {
            absentCount++;
        }

        if (absentCount >= 2) {
            return false;
        }
    }
    return true;
};

console.log(checkRecord("PPALAL"));

/**
 * Time Complexity = O(n)
 * where n is the length of the string parameter 's'
 */
