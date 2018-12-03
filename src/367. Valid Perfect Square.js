/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var sqrt_num = Math.sqrt(num);
    return sqrt_num == parseInt(sqrt_num);
};
