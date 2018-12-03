/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var length = nums.length;
    if(length === 0) return 0;
    if(length === 1) return nums[0];

    // opt[i] means the opt result in (i + 1) length nums arrays.
    var opt = [];
    opt[0] = nums[0];
    opt[1] = Math.max(nums[0], nums[1]);

    for(var i = 2; i < length; i ++){
        // opt[i] in case steal ith house:
        opt[i] = Math.max(nums[i] + opt[i - 2], opt[i - 1]);
    }
    return opt[length - 1];
};
