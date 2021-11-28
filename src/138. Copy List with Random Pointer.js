/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

export function copyRandomList(head) {
  const visited = new Map(),
    cloneHead = cloneNode(head, visited)
  let current = head,
    cloneCurrent = cloneHead
  while (current) {
    cloneCurrent.next = cloneNode(current.next, visited)
    cloneCurrent.random = cloneNode(current.random, visited)
    cloneCurrent = cloneCurrent.next
    current = current.next
  }
  return cloneHead
}

function cloneNode(node, visited) {
  if (!node) return node
  if (visited.has(node)) return visited.get(node)
  const cloned = new Node(node.val)
  visited.set(node, cloned)
  return visited.get(node)
}
