/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    const arrLen = arr.length;
    for (let i = 0; i < arrLen - 1; i++) {
        for (let j = i + 1; j < arrLen; j++) {
            if (arr[i] === (2 * arr[j])) {
                return true;
            } else if ((2 * arr[i]) === arr[j]) {
                return true;
            }
        }
    }
    return false;
};

console.log(checkIfExist([3, 1, 7, 11]));
