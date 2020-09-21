/**
 * @param {number} n
 * @return {number}
 */

const minOperations = (n) => ((n - (n % 2)) * Math.ceil(n / 2)) / 2
