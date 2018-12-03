/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var hash = {};
    var duplicates = [];
    for(var i = 0; i < nums.length; i ++){
        var char = nums[i];
        if (!hash[char]) hash[char] = 1;
        else duplicates.push(char);
    }
    return duplicates;
};
