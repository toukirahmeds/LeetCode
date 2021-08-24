/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const patternMapDict = {}, sMapDict = {}, sWordsArr = s.split(" "), sLen = sWordsArr.length;
    if (pattern.length !== sLen) {
        return false;
    }

    let currentWord, patternChar;
    for (let i = 0; i < sLen; i++) {
        currentWord = sWordsArr[i], patternChar = pattern[i];

        if (!patternMapDict.hasOwnProperty(patternChar)) {
            patternMapDict[patternChar] = currentWord;
        } else if (patternMapDict[patternChar] !== currentWord) {
            return false;
        }

        if (!sMapDict.hasOwnProperty(currentWord)) {
            sMapDict[currentWord] = patternChar;
        } else if (sMapDict[currentWord] !== patternChar) {
            return false;
        }
    }

    return true;
};

console.log(wordPattern("abca", "dog cat cat dog"));


/**
 * Time Complexity = O(n)
 * where n is the length of the number of characters in 'pattern' or number of words in 's'
 */
