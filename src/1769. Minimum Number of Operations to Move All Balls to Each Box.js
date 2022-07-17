/**
 * @param {string} boxes
 * @return {number[]}
 */

export function minOperations(boxes) {
  const n = boxes.length,
    steps = Array(n).fill(0)

  for (let i = 0, box = 0, step = 0; i < n; i++) {
    steps[i] += step
    box += boxes[i] === '1'
    step += box
  }

  for (let i = n - 1, box = 0, step = 0; i >= 0; i--) {
    steps[i] += step
    box += boxes[i] == '1'
    step += box
  }

  return steps
}
