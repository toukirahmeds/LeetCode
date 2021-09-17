const KeyboardRows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"]

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const wordsLen = words.length, keyboardRowsLen = KeyboardRows.length, result = [];
    let currentWord, currentWordLen, currentRow, k, exists;
    for (let i = 0; i < wordsLen; i++) {
        currentWord = words[i].toLowerCase();
        currentWordLen = currentWord.length;
        exists = false;
        for (let j = 0; j < keyboardRowsLen; j++) {
            currentRow = KeyboardRows[j];
            k = 0;
            for (; k < currentWordLen; k++) {
                if (!currentRow.includes(currentWord[k])) {
                    break;
                }
            }
            if (k === currentWordLen) {
                exists = true;
                break;
            }
        }
        if (exists) {
            result.push(words[i]);
        }
    }

    return result;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));

/**
 * Time Complexity = O(3mn) = O(mn)
 * where m is the number of words in the parameter 'words' and
 * n is the length of the largest word in 'words' array.
 */
