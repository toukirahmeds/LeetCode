/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    const wordLen = word.length;
    let charCodeValue = word[0].charCodeAt(0);
    let isCurrentCharCapital = charCodeValue >= 65 && charCodeValue <= 90;
    const isFirstCharCapital = isCurrentCharCapital;
    let isAllCharCapital = false;

    for (let i = 1; i < wordLen; i++) {
        charCodeValue = word[i].charCodeAt(0);
        isCurrentCharCapital = charCodeValue >= 65 && charCodeValue <= 90;
        if (isFirstCharCapital) {
            if (i == 1 && !isAllCharCapital && isCurrentCharCapital) {
                isAllCharCapital = true;
            } else if (isAllCharCapital && !isCurrentCharCapital) {
                return false;
            } else if (!isAllCharCapital && isCurrentCharCapital) {
                return false;
            }
        } else if (isCurrentCharCapital) {
            return false;
        }
    }
    return true;
};

console.log(detectCapitalUse("oogLe"));

/**
 * Time Complexity = O(n)
 * where n is the length of the string parameter 'word'
 */
