/**
 * prefixSubArraySum - This function checks if there is a subarray in the given array 'nums' 
 * that sums up to the given 'target' by using prefix subArray sum technique.
 *
 * @param {Array} nums - The array of numbers to check. This can include both positive and negative numbers.
 * @param {Number} target - The target sum we are looking for.
 *
 * @returns {Boolean} - Returns 'true' if there is a contiguous subarray that sums up to 'target', 
 *                      otherwise it returns 'false'.
 */
function prefixSubArraySum(nums, target) {
    let left = 0;
    let right = 0;
    let sum = 0;
    
    while (right < nums.length) {
        // Check if the current number is equal to the target
        if (nums[right] === target)
            return true;
        
        // Add the current number to the sum
        sum += nums[right];

        // Check if the sum equals the target
        if (sum === target)
            return true;

        // Move left pointer until sum is less than or eq   ual to target
        while (sum > target) {
            sum -= nums[left];
            left++;
        }

        // Check if the sum equals the target after adjusting left pointer
        if (sum === target)
            return true;

        right++;
    }

    return false;
}

    // TEST CASES
    
    const nums1 = [23, 43, 5, 5, 6, 6, 76, 778, 788, 554, 334, 5666, 77];
    console.log(prefixSubArraySum(nums1, 788)); // true

    const nums2 = [1, 2, 3, 4, 5];
    console.log(prefixSubArraySum(nums2, 10)); // true

    const nums3 = [2, 4, 6, 8, 10];
    console.log(prefixSubArraySum(nums3, 11)); // false

    const nums4 = [-1, -2, -3, -4, -5];
    console.log(prefixSubArraySum(nums4, -5)); // true

    const nums5 = [100, 200, 300, 400, 500];
    console.log(prefixSubArraySum(nums5, 1000)); // true

    const nums6 = [3, 1, 7, 11, 5, 6, 2, 8];
    console.log(prefixSubArraySum(nums6, 14)); // false

