/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    const arrLen = arr.length;

    for (let i = 0; i < arrLen - 1;) {
        if (arr[i] === 0) {
            for (let j = arrLen - 1; j > i + 1; j--) {
                arr[j] = arr[j - 1]
            }
            arr[i + 1] = 0;
            i += 2;
        } else {
            i++;
        }
    }
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
