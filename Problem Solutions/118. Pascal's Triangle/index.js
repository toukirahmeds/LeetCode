/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const result = [[1]];
    let currentArr, prevArr;
    for(let i = 1; i < numRows; i++) {
        currentArr = [1];
        prevArr = result[i-1];
        for(let j = 1; j < i; j++) {
            currentArr.push(prevArr[j-1] + prevArr[j]);
        }
        currentArr.push(1);
        result.push(currentArr);
    }

    return result;
};

console.log(generate(4));

/**
 * Time Compexity = O(n*2)
 * where n is the number of rows.
 */
