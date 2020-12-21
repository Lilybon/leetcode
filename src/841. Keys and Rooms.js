/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

export function canVisitAllRooms(rooms) {
  const visited = Array(rooms.length).fill(false)
  visited[0] = true
  dfs(0)
  return visited.every((room) => room)
  function dfs(idx) {
    const nextRooms = rooms[idx]
    for (let nextRoom of nextRooms) {
      if (visited[nextRoom]) continue
      visited[nextRoom] = true
      dfs(nextRoom)
    }
  }
}
