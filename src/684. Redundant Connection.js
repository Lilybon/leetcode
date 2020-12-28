/**
 * @param {number[][]} edges
 * @return {number[]}
 */

export function findRedundantConnection(edges) {
  const group = Array.from(Array(edges.length), (_, idx) => idx)
  for (let [n1, n2] of edges) {
    let g1 = getGroup(n1, group),
      g2 = getGroup(n2, group)
    if (g1 !== g2) group[g2] = g1
    else return [n1, n2]
  }
}

function getGroup(idx, group) {
  if (group[idx] !== idx) group[idx] = getGroup(group[idx], group)
  return group[idx]
}
