/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var count = 0;
    if(n === 0) return 0;
    while(n > 0){
        var digit = n % 2;
        if(digit === 1) count ++;
        n = parseInt(n / 2);
    }
    return count;
};
