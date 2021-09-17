const alphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * @param {number} columnNumb3er
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    const stack = [];
    let quotient = Math.floor(columnNumber / 26), remainder = columnNumber % 26;
    let moveOn = true;
    while (moveOn) {
        stack.push(remainder);
        remainder = quotient % 26;
        quotient = Math.floor(quotient / 26);
        if(quotient === 0) {
            stack.push(quotient % 26);
            break;
        }
    }
    console.log(stack);
    let result = "";
    while (stack.length !== 0) {
        result += alphas[stack.pop()];
    }
    return result;
};

console.log(convertToTitle(26));
