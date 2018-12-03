/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // bit_string of powerOfTwo will be like a 1 in front and 0s following behind
    var bit_string = n.toString(2);
    if (bit_string[0] != "1") return false;
    for(var i = 1; i < bit_string.length; i ++){
        if (bit_string[i] != 0) return false;
    }
    return true;
};
