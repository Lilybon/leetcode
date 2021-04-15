/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

// BFS
/*
export function wallsAndGates(rooms) {
  const m = rooms.length,
        queue = []
  if (!m) return 0
  const n = rooms[0].length,
        vectors = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rooms[i][j] === 0 && queue.push([i, j])
    }
  }
  while (queue.length) {
    const [i, j] = queue.shift()
    for (let [vi, vj] of vectors) {
      const nextI = i + vi,
            nextJ = j + vj
      if (nextI < 0 || nextI >= m || nextJ < 0 || nextJ >= n || rooms[nextI][nextJ] <= rooms[i][j]) continue
      rooms[nextI][nextJ] = rooms[i][j] + 1
      queue.push([nextI, nextJ])
    }
  }
}
 */

// DFS
export function wallsAndGates(rooms) {
  const m = rooms.length
  if (!m) return 0
  const n = rooms[0].length
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rooms[i][j] === 0 && dfs(i, j, 0)
    }
  }
  function dfs(i, j, distance) {
    if (i < 0 || i >= m || j < 0 || j >= n || rooms[i][j] < distance) return
    rooms[i][j] = distance
    distance += 1
    dfs(i - 1, j, distance)
    dfs(i + 1, j, distance)
    dfs(i, j - 1, distance)
    dfs(i, j + 1, distance)
  }
}
