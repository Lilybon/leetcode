/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

export function canVisitAllRooms(rooms) {
  const visited = Array(rooms.length).fill(false)
  dfs(0)
  return visited.every((room) => room)
  function dfs(idx) {
    if (visited[idx]) return
    visited[idx] = true
    const nextRooms = rooms[idx]
    for (let nextRoom of nextRooms) {
      dfs(nextRoom)
    }
  }
}
