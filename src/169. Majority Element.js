/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var arr = [];
    var major = nums.length / 2;
    for(var i = 0; i < nums.length; i ++){
        var v = nums[i];
        if(!arr[v]){
            arr[v] = 0;
        }
        arr[v] += 1;
        if(arr[v] >= major){
            return v;
        }
    }
};
