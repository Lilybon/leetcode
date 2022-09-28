/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  const dummy = new ListNode(-1, head)
  let left = dummy,
    right = dummy
  while (n) {
    right = right.next
    n--
  }
  while (right.next) {
    left = left.next
    right = right.next
  }
  const deleted = left.next
  left.next = deleted.next
  deleted.next = null
  return dummy.next
}
