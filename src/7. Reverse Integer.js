/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var INT_MAX = Math.pow(2, 31) - 1;
    if(0 <= x && x < 10) return x;

    var str = x.toString();

    var rStr = str.split('').reverse().join('');

    if(rStr.indexOf('-') > -1){
        rStr = '-' + rStr.replace('-', '');
    }

    var result = parseInt(rStr);

    if(result > INT_MAX || result < -(INT_MAX + 1)) return 0;
    return result;
};
