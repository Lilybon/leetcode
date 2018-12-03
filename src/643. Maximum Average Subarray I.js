/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var sum = 0;
    for(var i = 0; i < k; i ++){
        sum += nums[i];
    }
    var max_sum = sum;
    for(var j = k; j < nums.length; j ++){
        sum += nums[j] - nums[j - k];
        max_sum = Math.max(sum, max_sum);
    }
    return max_sum/k;
};
