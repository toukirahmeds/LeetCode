/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    const sLen = s.length;
    let tIndex, startIndex = 0;
    
    for(let i = 0; i < sLen; i++) {
        tIndex = t.indexOf(s[i], startIndex);
        if(tIndex > -1) {
            startIndex = tIndex + 1;
        } else {
            return false;
        }
    }
    
    return true;
};

console.log(isSubsequence("axc", "ahbgdc"));

/**
 * Time Complexity = O(n * m) = O(mn)
 * where m is the length of string parameter 't' and n is the 
 * length of string parameter 's'
 */
