/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    const sArr = s.split(""), tLen = t.length;
    let sIndex;
    for (let i = 0; i < tLen; i++) {
        sIndex = sArr.indexOf(t[i]);
        if (sIndex > -1) {
            sArr[sIndex] = null;
        } else {
            return t[i];
        }
    }
};

console.log(findTheDifference("ae", "aea"));


/**
 * Time Complexity = O(n)
 * where n is the length of the string parameter 't'
 */
