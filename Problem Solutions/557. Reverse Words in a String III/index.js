/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    const sLen = s.length;
    let result = "", currentWord = "";
    for(let i = 0; i < sLen; i++) {
        if(s[i] === " ") {
            result += currentWord.split("").reverse().join("") + " ";
            currentWord = "";
        } else {
            currentWord += s[i];
        }
    }
    
    if(currentWord) {
        result += currentWord.split("").reverse().join("");
    }
    
    return result;
};

console.log(reverseWords("Let's take LeetCode contest"));

/**
 * Time Complexity = O(n)
 * where n is the length of the string parameter 's'
 */
