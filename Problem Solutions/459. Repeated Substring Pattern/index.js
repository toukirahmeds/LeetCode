/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    const sLen = s.length;
    const finalIndex = Math.round(sLen / 2) + 1;
    let substr, extendedSubstr, j, moreSubstrExists;
    for (let i = 1; i < finalIndex; i++) {
        substr = s.substring(0, i);
        extendedSubstr = substr + substr;
        moreSubstrExists = s.substring(0, extendedSubstr.length).localeCompare(extendedSubstr) === 0;
        j = extendedSubstr.length;
        while (j < sLen && moreSubstrExists) {
            extendedSubstr += substr;
            moreSubstrExists = s.substring(0, extendedSubstr.length).localeCompare(extendedSubstr) === 0;
            j = extendedSubstr.length;
        }

        if (j === sLen && moreSubstrExists) {
            return true;
        }
    }
    return false;
};

console.log(repeatedSubstringPattern("abcabcabcabc"));

/**
 * Time Complexity = O(n^2)
 * where n is the length of the string parameter 's'
 */
