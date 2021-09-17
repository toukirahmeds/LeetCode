/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const sMapDict = {}, tMapDict = {}, len = s.length;
    let sChar, tChar, sHasOwnProp, tHasOwnProp;
    for (let i = 0; i < len; i++) {
        sChar = s[i], tChar = t[i];
        sHasOwnProp = sMapDict.hasOwnProperty(tChar);
        tHasOwnProp = tMapDict.hasOwnProperty(sChar);
        if (!sHasOwnProp) {
            sMapDict[tChar] = sChar;
        } else if (sHasOwnProp && sMapDict[tChar] !== sChar) {
            return false;
        }

        if (!tHasOwnProp) {
            tMapDict[sChar] = tChar;
        } else if (tHasOwnProp && tMapDict[sChar] !== tChar) {
            return false;
        }
    }
    return true
};

console.log(isIsomorphic("badc", "baba"));

/**
 * Time Complexity = O(n)
 */
