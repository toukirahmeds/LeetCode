/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    const str1 = words[0];
    const str1Len = str1.length;
    const result = [];
    let currentChar, isFoundEvery;

    for (let i = 0; i < str1Len; i++) {
        currentChar = str1[i];
        isFoundEvery = words.every(word => word.includes(currentChar));
        if (isFoundEvery) {
            result.push(currentChar);
            words = words.map(word => word.replace(currentChar, ""));
        }
    }

    return result;
};

console.log(commonChars(["bella", "label", "roller"]));

/**
 * Time Complexity = O(mn)
 * where m is the length of first word in 'words' array and n is the number of
 * items in 'words' array.
 */
