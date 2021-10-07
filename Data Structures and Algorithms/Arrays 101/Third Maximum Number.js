/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    const numsLen = nums.length;
    let firstMax = Number.NEGATIVE_INFINITY, secondMax = Number.NEGATIVE_INFINITY, thirdMax = Number.NEGATIVE_INFINITY, currentNumber;
    for (let i = 0; i < numsLen; i++) {
        currentNumber = nums[i];

        if (currentNumber > firstMax) {
            if (firstMax !== Number.NEGATIVE_INFINITY) {
                if (secondMax !== Number.NEGATIVE_INFINITY) {
                    thirdMax = secondMax;
                }
                secondMax = firstMax;
            }
            firstMax = currentNumber;
        }

        if (currentNumber > secondMax && currentNumber < firstMax) {
            if (secondMax !== Number.NEGATIVE_INFINITY) {
                thirdMax = secondMax;
            }
            secondMax = currentNumber;
        }

        if (currentNumber > thirdMax && currentNumber < secondMax) {
            thirdMax = currentNumber;
        }
    }

    if (thirdMax === Number.NEGATIVE_INFINITY) {
        return firstMax;
    }
    return thirdMax;
};

console.log(thirdMax([1, 5, 2, 10, 2, 3, 7, 6, 1]));

/**
 * Time Complexity = O(n)
 * Space Complexity = O(1)
 */
