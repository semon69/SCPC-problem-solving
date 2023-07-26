function twoSumSortedArray(nums, target) {
    let first = 0;
    let last = nums.length - 1;

    while (first < last) {
        const currentSum = nums[first] + nums[last];

        if (currentSum === target) {
            return [first, last];
        } else if (currentSum < target) {
            first++;
        } else {
            last--;
        }
    }
    return [];
}

const sortedArray = [1, 3, 6, 9, 11, 15];
const targetValue = 9;
const result = twoSumSortedArray(sortedArray, targetValue);
console.log(result);
