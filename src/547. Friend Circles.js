/**
 * @param {number[][]} M
 * @return {number}
 */

// Union Find
/*
function findCircleNum (M) {
  const f = Array.from(Array(M.length), (_, idx) => idx)
  for (let i = 0; i < M.length; i++) {
    for (let j = i + 1; j < M.length; j++) {
      if (M[i][j] === 1) merge(f, i, j)
    }
  }
  let count = 0
  for (let i = 0; i < f.length; i++) {
    if (f[i] === i) count++
  }
  return count
}

function getf (f, v) {
  if (f[v] === v) return v
  f[v] = getf(f, f[v])
  return f[v]
}

function merge (f, u, v) {
  let t1 = getf(f, u)
  let t2 = getf(f, v)
  if (t1 !== t2) f[t1] = t2
}
 */

// DFS
function findCircleNum(M) {
  const visited = new Set()
  let count = 0
  for (let i = 0; i < M.length; i++) {
    if (!visited.has(i)) {
      count++
      visitFriends(i)
    }
  }
  return count
  function visitFriends(i) {
    visited.add(i)
    for (let j = 0; j < M.length; j++) {
      if (M[i][j] === 1 && !visited.has(j)) visitFriends(j)
    }
  }
}
