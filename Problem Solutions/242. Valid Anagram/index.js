/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const tLen = t.length;
    if (s.length !== tLen) {
        return false;
    }
    let index;
    for (let i = 0; i < tLen; i++) {
        index = s.indexOf(t[i]);
        if (index > -1) {
            s = s.replace(s[index], "");
        } else {
            return false;
        }
    }

    return true;
};

console.log(isAnagram("rat", "car"));


/**
 * Time Complexity = O(n)
 */
