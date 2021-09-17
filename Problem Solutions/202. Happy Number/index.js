/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let loopOn = true, squareSum, squareSums = [], currentNum = n;
    while(loopOn) {
        squareSum = currentNum.toString().split("").reduce((acc, num) => acc + (num**2), 0);
        if(squareSum === 1) {
            loopOn = false;
        } else if(squareSums.includes(squareSum)) {
            return false;
        } else {
            squareSums.push(squareSum);
            currentNum = squareSum;
        }
    }
    return true;
};

console.log(isHappy(19));

/**
 * Time Complexity = O(n)
 * where n is the number parameter 'n'
 */
