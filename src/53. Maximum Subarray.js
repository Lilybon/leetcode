/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curMax = 0, sumMax = -Number.MAX_VALUE;
    for(let val of nums){
        curMax = Math.max(curMax + val, val);
        sumMax = Math.max(sumMax, curMax);
    }
    return sumMax;
};
