/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    const arrLen = arr.length;
    let greatest;
    for (let i = 0; i < arrLen - 1; i++) {
        greatest = 0;
        for (let j = i + 1; j < arrLen; j++) {
            if (arr[j] > greatest) {
                greatest = arr[j];
            }
        }

        arr[i] = greatest;
    }
    arr[arrLen - 1] = -1;
    return arr;
};

console.log(replaceElements([400]));
