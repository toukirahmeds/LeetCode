/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    const arrLen = arr.length;
    if (arrLen < 3) {
        return false;
    }

    let peakIndex;
    for (let i = 1; i < arrLen - 1; i++) {
        if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
            peakIndex = i;
        }
    }
    if (!peakIndex) {
        return false;
    }

    for (let i = 0; i < peakIndex; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false;
        }
    }

    for (let i = peakIndex; i < arrLen - 1; i++) {
        if (arr[i] <= arr[i + 1]) {
            return false;
        }
    }


    return true;
};

console.log(validMountainArray([0, 3, 2, 1, 1]));
