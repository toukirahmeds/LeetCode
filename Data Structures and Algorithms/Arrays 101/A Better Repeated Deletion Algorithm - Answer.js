function removeDuplicates(nums) {
    const numsLen = nums.length;
    let writeIndex = 1;
    for (let readIndex = 1; readIndex < numsLen; readIndex++) {
        if (nums[readIndex] !== nums[readIndex - 1]) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }
    return writeIndex;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 5, 5, 5, 6, 6, 6, 7]));
