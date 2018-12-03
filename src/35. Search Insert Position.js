/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (target < nums[0]) return 0;
    var len = nums.length;
    if (target > nums[len - 1]) return len;
    for(var i = 0; i < len; i ++){
        if(target == nums[i] || target < nums[i]) return i;
    }
};
