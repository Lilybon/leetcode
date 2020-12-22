/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */

export function makeConnected(n, connections) {
  const groups = Array.from(Array(n), (_, idx) => idx)
  let redundantEdge = 0
  connections.forEach(([a, b]) => {
    let groupA = findGroup(a, groups),
      groupB = findGroup(b, groups)
    if (groupA === groupB) redundantEdge++
    else groups[groupB] = groupA
  })
  const groupSize = groups.reduce((size, group, idx) => {
    if (group === idx) size++
    return size
  }, 0)
  return redundantEdge >= groupSize - 1 ? groupSize - 1 : -1
}

function findGroup(idx, groups) {
  if (groups[idx] !== idx) groups[idx] = findGroup(groups[idx], groups)
  return groups[idx]
}
