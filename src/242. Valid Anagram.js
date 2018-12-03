/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    var sort_s = sortStr(s);
    var sort_t = sortStr(t);
    return sort_s === sort_t;
    function sortStr(str){
        return str.split('').sort().join('');
    }
};
