/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    const heightsLen = heights.length;
    const expected = new Array(heightsLen);
    expected[0] = heights[0];
    let expectedLen = 1, insertionIndex, currentHeight;
    for (let i = 1; i < heightsLen; i++) {
        currentHeight = heights[i];
        insertionIndex = expectedLen;
        while (insertionIndex > 0 && currentHeight < expected[insertionIndex - 1]) {
            insertionIndex--;
        }
        if (insertionIndex !== expectedLen) {
            for (let j = expectedLen; j > insertionIndex; j--) {
                expected[j] = expected[j - 1];
            }
        }
        expected[insertionIndex] = currentHeight;
        expectedLen++;
    }

    let notMatchedCount = 0;
    for (let i = 0; i < heightsLen; i++) {
        if (heights[i] !== expected[i]) {
            notMatchedCount++;
        }
    }
    return notMatchedCount;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]));
