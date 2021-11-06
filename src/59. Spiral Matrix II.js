/**
 * @param {number} n
 * @return {number[][]}
 */

export function generateMatrix(n) {
  let i = 0,
    j = 0,
    value = 1,
    direction = 'right',
    block = 0
  const matrix = Array.from(Array(n), () => Array(n))

  while (value <= n ** 2) {
    matrix[i][j] = value
    switch (direction) {
      case 'right':
        j++
        if (j === n - 1 - block) direction = 'down'
        break
      case 'down':
        i++
        if (i === n - 1 - block) direction = 'left'
        break
      case 'left':
        j--
        if (j === block) direction = 'up'
        break
      case 'up':
        i--
        if (i === block + 1) {
          // fit next spiral start point
          direction = 'right'
          block++
        }
        break
      default:
    }
    value++
  }
  return matrix
}
