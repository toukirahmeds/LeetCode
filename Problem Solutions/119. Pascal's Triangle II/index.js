/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const result = [[1]];
    let currentRow, prevRow;
    for(let i = 1; i <= rowIndex; i++) {
        currentRow = [1];
        prevRow = result[i-1];

        for(let j = 1; j < i; j++) {
            currentRow.push(prevRow[j-1] + prevRow[j]);
        }

        currentRow.push(1);
        result.push(currentRow);
    }
    return result[rowIndex];
};

console.log(getRow(3));

/**
 * Time Compexity = O(n*2)
 * where n is the number of rows.
 */
