/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

export function mergeNodes(head) {
  let node = head.next
  while (node) {
    while (node.next && node.next.val > 0) {
      node.val += node.next.val
      node.next = node.next.next
    }
    node.next = node.next.next
    node = node.next
  }
  return head.next
}
