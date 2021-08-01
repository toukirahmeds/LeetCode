/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const lenA = a.length, lenB = b.length;
    let result = "", indexA = lenA - 1, indexB = lenB - 1, currentA, currentB,
        currentSum, adder = 0;
    while (indexA > -1 || indexB > -1) {
        currentA = parseInt(a[indexA] || "0");
        currentB = parseInt(b[indexB] || "0");
        currentSum = currentA + currentB + adder;
        result = (currentSum % 2) + result;
        adder = currentSum > 1 ? 1 : 0;
        indexA--;
        indexB--;
    }
    if (adder > 0) {
        result = adder + result;
    }
    return result;
};

console.log(addBinary("1010", "1011"));

/**
 * Time Complexity = O(n)
 * where n is the length of the longer binary string passed as argument.
 */
