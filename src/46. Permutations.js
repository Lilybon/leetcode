/**
 * @param {number[]} nums
 * @return {number[][]}
 */

export function permute(nums) {
  const result = new Array()
  const visited = new Uint8Array(nums.length)
  const row = new Array()
  dfs()
  return result
  function dfs() {
    if (row.length === nums.length) {
      result.push([...row])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue
      visited[i] = 1
      row.push(nums[i])
      dfs()
      visited[i] = 0
      row.pop()
    }
  }
}
