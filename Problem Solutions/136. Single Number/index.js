/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    const countDict = {}, numsLen = nums.length;
    let current, singleNumber;

    for (let i = 0; i < numsLen; i++) {
        current = nums[i];
        if (countDict.hasOwnProperty(current)) {
            countDict[current]++;
            if (singleNumber === current) {
                singleNumber = null;
            }
        } else {
            countDict[current] = 1;
            singleNumber = current;
        }
    }

    if (singleNumber === null) {
        const objectKeys = Object.keys(countDict);
        const totalKeys = objectKeys.length;
        for(let i = 0; i < totalKeys; i++) {
            current = objectKeys[i];
            if(countDict[current] === 1) {
                singleNumber = current;
                break;
            }
        }
    }

    return singleNumber;
};

console.log(singleNumber([1]));

/**
 * Time Complexity = O(n)
 * where n is the number of elements in the nums array.
 */
