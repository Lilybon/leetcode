/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

// BFS - same solution for leetcode 116
/*
export function connect (root) {
  if (!root) return root
  let queue = [root]
  while (queue.length) {
    let prev = null,
        children = []
    for (let node of queue) {
      if (node.left) children.push(node.left)
      if (node.right) children.push(node.right)
      prev = node
      if (prev) node.next = prev
    }
    prev.next = null
    queue = children
  }
  return root
}
 */

// DFS
export function connect(root) {
  const map = {}
  dfs(root)
  return root
  function dfs(node, depth = 0) {
    if (!node) return
    if (map[depth]) map[depth].next = node
    map[depth] = node
    dfs(node.left, depth + 1)
    dfs(node.right, depth + 1)
  }
}
