/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function removeNthFromEnd(head, n) {
  const dummyHead = new ListNode(null, head)
  let current = head,
    len = 0
  while (current) {
    len++
    current = current.next
  }
  let tgt = len - n
  current = dummyHead
  while (tgt) {
    tgt--
    current = current.next
  }
  const delNode = current.next
  current.next = delNode.next
  delNode.next = null
  return dummyHead.next
}
