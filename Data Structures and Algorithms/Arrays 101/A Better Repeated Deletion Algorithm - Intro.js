function removeDuplicates(nums) {
    let length = nums.length;
    for (let i = 0; i < length - 1;) {
        if (nums[i] === nums[i + 1]) {
            for (let j = i + 1; j < length - 1; j++) {
                nums[j] = nums[j + 1];
            }
            length--;
        } else {
            i++;
        }
    }
    console.log(nums);
    return length;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6]));
