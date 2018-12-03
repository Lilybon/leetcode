/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var hash = {};
    for(var i = 0; i < magazine.length; i ++){
        var alphabet = magazine[i];
        if(!hash[alphabet]) hash[alphabet] = 1;
        else hash[alphabet] ++;
    }
    for(var j = 0; j < ransomNote.length; j ++){
        var alphabet = ransomNote[j];
        if(hash[alphabet] === 0 || hash[alphabet] === undefined) return false;
        else if(hash[alphabet] > 0) hash[alphabet] --;
    }
    return true;
};
