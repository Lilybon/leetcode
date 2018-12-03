/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    // String.fromCharCode(65) = 'A'， String.fromCharCode(66) = 'B' ..... String.fromCharCode(90) = 'Z'
    var column_title = "";
    while(n > 0){
        var char_num = (n - 1) % 26;
        var char = String.fromCharCode(char_num  + 65);
        column_title = char + column_title;
        n = parseInt((n - 1) / 26);
    }
    return column_title;
}
