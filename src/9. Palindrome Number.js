/**
 * @param {number} x
 * @return {boolean}
 */

/*
var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x < 10) return true;

    var str = x.toString();
    var rStr = str.split('').reverse().join('');
    return str === rStr? true : false;
};
*/

var isPalindrome = function(x) {
    if(x < 0 || (x%10 == 0 && x != 0)) return false;
    if(x < 10) return true;

    var str = x.toString();
    var rStr = str.split('').reverse().join('');
    return str === rStr? true : false;
};
