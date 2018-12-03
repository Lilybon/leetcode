/**
 * @param {number[]} nums
 * @return {number}
 */

// a XOR b XOR a = b (XOR運算律)
var singleNumber = function(nums) {
    var result = 0;
    nums.forEach(function(num){
        result ^= num;
    });
    return result;
};
