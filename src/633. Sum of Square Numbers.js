/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    if(c == 0) return true;
    for(var i = 1; i <= Math.sqrt(c); i ++){
        var tmp = c - Math.pow(i, 2);
        if(Number.isInteger(Math.sqrt(tmp))) return true;
    }
    return false;
};
