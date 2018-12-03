/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    var rule = function(a, b){return b - a};
    g.sort(rule);
    s.sort(rule);
    var count = 0;
    for(var i = 0; i < g.length; i ++){
        if(g[i] <= s[0]){
            s.shift(); // use a cookie
            count ++;
        }
    }
    return count;
};
