const numDict = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9
};

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let num1I = num1.length - 1, num2I = num2.length - 1;
    const maxIteration = Math.max(num1I, num2I) + 1;
    let result = "", adder = 0, sum;
    for (let i = 0; i < maxIteration; i++) {
        sum = numDict[num1[num1I] || "0"] + numDict[num2[num2I] || "0"] + adder;

        if (sum > 9) {
            result = (sum - 10).toString() + result;
            adder = 1;
        } else {
            result = sum.toString() + result;
            adder = 0;
        }

        num1I--;
        num2I--;
    }

    if (adder === 1) {
        result = adder.toString() + result;
    }

    return result;
};

console.log(addStrings("456", "77"));

/**
 * Time Complexity = O(n)
 * where n is the maximum length of the string parameters 'num1' and 'num2'
 */
