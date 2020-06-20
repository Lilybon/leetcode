/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

const spiralOrder = (matrix) => {
  let traverse = []
  const m = matrix.length
  if (!m) return traverse
  const n = matrix[0].length
  if (!n) return traverse
  let count = 1,
    i = 0,
    j = 0,
    block = 0,
    direction = n !== 1 ? 'right' : 'down'
  while (count <= m * n) {
    traverse.push(matrix[i][j])
    switch (direction) {
      case 'right':
        j++
        if (j === n - 1 - block) direction = 'down'
        break
      case 'down':
        i++
        if (i === m - 1 - block) direction = 'left'
        break
      case 'left':
        j--
        if (j === block) direction = 'up'
        break
      case 'up':
        i--
        if (i === block + 1) {
          direction = 'right'
          block++
        }
        break
      default:
    }
    count++
  }
  return traverse
}
