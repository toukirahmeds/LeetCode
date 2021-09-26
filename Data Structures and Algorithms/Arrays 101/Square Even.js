function squareEven(arr) {
    if (!arr) {
        return arr;
    }

    const arrLen = arr.length;

    for (let i = 0; i < arrLen; i++) {
        if (i % 2 === 0) {
            arr[i] *= arr[i]
        }
    }

    return arr;
}

console.log(squareEven([9, -2, -9, 11, 56, -12, -3]));
