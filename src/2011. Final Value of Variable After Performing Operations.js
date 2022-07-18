/**
 * @param {string[]} operations
 * @return {number}
 */

// function finalValueAfterOperations(operations) {
//   let X = 0
//   operations.forEach((operation) => eval(operation))
//   return X
// }

export function finalValueAfterOperations(operations) {
  return operations.reduce((sum, operation) => {
    switch (operation) {
      case 'X++':
      case '++X':
        return sum + 1
      case 'X--':
      case '--X':
        return sum - 1
      default:
        return sum
    }
  }, 0)
}
