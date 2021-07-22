/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    const needleLength = needle.length, haystackLen = haystack.length;
    if(needleLength === 0) {
        return 0;
    }
    
    for(let i = 0; i < haystackLen; i++) {
            if(haystack.substr(i, needleLength).localeCompare(needle) === 0) {
                return i;
            }

            if(haystackLen - i - 1 < needleLength) {
                break;
            }
    }

    return -1;
};

console.log(strStr("hello", "ell"));

/**
 * Time Complexity = O(n)
 */
