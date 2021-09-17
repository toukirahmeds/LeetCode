/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const smallestStrLen = Math.min(...strs.map(str => str.length));
    let commonPrefix = "", selectedPrefix, prefixExists;
    for (let i = 0; i < smallestStrLen; i++) {
        selectedPrefix = strs[0].slice(0, i + 1);
        prefixExists = strs.every(str => str.slice(0, i + 1).localeCompare(selectedPrefix) === 0);
        if (prefixExists) {
            commonPrefix = selectedPrefix;
        } else {
            break;
        }
    }

    return commonPrefix;
};

console.log(longestCommonPrefix(["dog", "doggy", "dogger"]));

/**
 * Time Complexity = O(n)
 * where n is the length of the smallest string.
 */
