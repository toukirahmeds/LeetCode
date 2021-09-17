/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const ransomLen = ransomNote.length, magazineCharArr = magazine.split("");
    let indexValue;
    for (let i = 0; i < ransomLen; i++) {
        indexValue = magazineCharArr.indexOf(ransomNote[i]);
        if (indexValue > -1) {
            magazineCharArr[indexValue] = null;
        } else {
            return false;
        }
    }

    return true;
};

console.log(canConstruct("baaa", "aaab"));

/**
 * Time Complexity = O(n)
 * where n is the length of string parameter 'ransomNote'
 */
