/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var hash = {};
    for(var i = 0; i < t.length; i ++){
        var alphabet = t[i];
        if(!hash[alphabet]) hash[alphabet] = 1;
        else hash[alphabet] ++;
    }
    for(var j = 0; j < s.length; j ++){
        var alphabet = s[j];
        hash[alphabet] --;
    }
    for(var k = 0; k < t.length; k ++){
        var alphabet = t[k];
        if(hash[alphabet] == 1){
            return alphabet;
        }
    }
};
