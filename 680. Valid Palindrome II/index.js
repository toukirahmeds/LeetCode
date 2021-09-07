/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    const sLen = s.length;
    let oneItemDeleted = false, i = 0, j = sLen - 1;
    while(i < j) {
        if(s[i] !== s[j]) {
            if(!oneItemDeleted) {
                oneItemDeleted = true;
                if(i+1 !== j) {
                    if(s[i+1] === s[j] && s[i+2] === s[j]) {
                        i++;
                        
                    } else if (s[i] === s[j-1] && s[i+1] === s[j-2]) {
                        j--;
                    } 
                } else {
                    if(s[i+1] === s[j]) {
                        i++;
                    } else if (s[i] === s[j-1]) {
                        j--;
                    } 
                }
                
                continue;
                
                
            } else {
                return false;
            }
        }
        i++, j--;
    }
    return true;
};

console.log(validPalindrome("abca"));
