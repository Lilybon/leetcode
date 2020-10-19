/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

export function allPathsSourceTarget(graph) {
  const result = [],
    path = [0],
    n = graph.length
  dfs(0)
  return result
  function dfs(node) {
    if (node === n - 1) {
      result.push([...path])
      return
    }
    for (let next of graph[node]) {
      path.push(next)
      dfs(next)
      path.pop()
    }
  }
}
