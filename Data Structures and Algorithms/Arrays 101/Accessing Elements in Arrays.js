const squareNums = new Array(10);

let currentNum;
for (let i = 0; i < squareNums.length; i++) {
    currentNum = i + 1;
    squareNums[i] = currentNum ** 2;
}

for (let i = 0; i < squareNums.length; i++) {
    console.log(squareNums[i]);
}
