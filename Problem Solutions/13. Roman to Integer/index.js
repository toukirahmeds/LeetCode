const I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000, IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900;

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const len = s.length;
    let i = 0, result = 0;
    while (i < len) {
        if (i !== len - 1 && s[i] === "I" && s[i + 1] === "V") {
            result += IV;
            i += 2;
        } else if (i !== len - 1 && s[i] === "I" && s[i + 1] === "X") {
            result += IX;
            i += 2;
        } else if (i !== len - 1 && s[i] === "X" && s[i + 1] === "L") {
            result += XL;
            i += 2;
        } else if (i !== len - 1 && s[i] === "X" && s[i + 1] === "C") {
            result += XC;
            i += 2;
        } else if (i !== len - 1 && s[i] === "C" && s[i + 1] === "D") {
            result += CD;
            i += 2;
        } else if (i !== len - 1 && s[i] === "C" && s[i + 1] === "M") {
            result += CM;
            i += 2;
        } else if (s[i] === "I") {
            result += I;
            i++;
        } else if (s[i] === "V") {
            result += V;
            i++;
        } else if (s[i] === "X") {
            result += X;
            i++;
        } else if (s[i] === "L") {
            result += L;
            i++;
        } else if (s[i] === "C") {
            result += C;
            i++;
        } else if (s[i] === "D") {
            result += D;
            i++;
        } else if (s[i] === "M") {
            result += M;
            i++;
        }
    }

    return result;
};

console.log(romanToInt("MCMXCIV"));

/**
 * Time Complexity = O(n)
 * where n is the length to characters in the roman number string.
 */
