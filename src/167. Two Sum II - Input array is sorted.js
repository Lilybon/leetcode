/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let i = 0, j = numbers.length - 1, sum;
    while (i < j) {
        sum = numbers[i] + numbers[j]
        if (sum === target) {
            return [i + 1, j + 1];
        } else if (sum > target) {
            j--;
        } else {
            i++;
        }
    }
};