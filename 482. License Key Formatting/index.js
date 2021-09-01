/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    const sLen = s.length;
    let result = "", currentGroupLen = 0, currentChar;
    for (let i = sLen - 1; i >= 0; i--) {
        currentChar = s[i];
        if (currentChar !== "-") {
            result = currentChar.toUpperCase() + result;
            currentGroupLen++;
            if (currentGroupLen === k && i > 0) {
                result = "-" + result;
                currentGroupLen = 0;
            }
        }
    }

    if (result[0] === "-") {
        const resultLen = result.length;
        let lastInd;
        for (let i = 0; i < resultLen; i++) {
            lastInd = i;
            if (result[i] !== "-") {
                break;
            }
        }

        result = result.slice(lastInd, resultLen);
    }

    return result;
};

console.log(licenseKeyFormatting("--a-a-a-a--", 2));

/**
 * Time Complexity = O(n)
 * where n is the length of the string parameter 's'
 */
