function getSecondLargest(nums) {
    // Complete the function

    let largest = nums[0];
    let sLargest = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            sLargest = largest;
            largest = nums[i];
            continue;
        }

        if ((nums[i] > sLargest) && (nums[i] < largest)) {
            sLargest = nums[i];
        }
    }
    return sLargest;
}
