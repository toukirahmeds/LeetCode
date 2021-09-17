const VOWELS = "aeiouAEIOU";

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const reversedStr = s.replace(/[^aeiouAEIOU]/gmi, "").split("").reverse().join(""), sLen = s.length;
    const sSplitted = s.split("");
    let vowelIndex = 0;
    
    for(let i = 0; i < sLen; i++) {
        if(VOWELS.indexOf(s[i]) > -1) {
            sSplitted[i] = reversedStr[vowelIndex++]
        }
    }
    return sSplitted.join("");
};

console.log(reverseVowels("leetcode"));

/**
 * Time Complexity = O(n)
 * where n is the length of the input string 's'
 */
