/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

function flatten(head) {
  dfs(head)
  return head
  function dfs(node) {
    if (!node) return
    dfs(node.child)
    dfs(node.next)
    const next = node.next
    node.next = node.child
    if (node.next) node.next.prev = node
    node.child = null
    while (node.next) {
      node = node.next
    }
    node.next = next
    if (next) next.prev = node
  }
}
