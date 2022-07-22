/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

export function partition(head, x) {
  const dummy = new ListNode(undefined, head)

  let prev = dummy
  while (prev.next && prev.next.val < x) prev = prev.next

  let current = prev
  while (current.next) {
    if (current.next.val < x) {
      const node = current.next
      current.next = node.next
      node.next = prev.next
      prev.next = node
      prev = prev.next
    } else {
      current = current.next
    }
  }

  return dummy.next
}
