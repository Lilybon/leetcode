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
    dummyHead = cloneNode(head, visited)
  let current = head,
    dummyCurrent = dummyHead
  while (current) {
    dummyCurrent.next = cloneNode(current.next, visited)
    dummyCurrent.random = cloneNode(current.random, visited)
    dummyCurrent = dummyCurrent.next
    current = current.next
  }
  return dummyHead
}

function cloneNode(node, visited) {
  if (!node) return node
  else if (visited.has(node)) return visited.get(node)
  else {
    let cloned = new Node(node.val)
    visited.set(node, cloned)
    return visited.get(node)
  }
}
