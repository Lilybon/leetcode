/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num < 10) return num;
    var digits = num;
    while (digits >= 10){
        var arr = digits.toString().split('');
        digits = 0;
        arr.forEach(el => {
            digits += parseInt(el);
        });
    }
    return digits;
};
