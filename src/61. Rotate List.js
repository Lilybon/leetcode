/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function rotateRight(head, k) {
  if (head === null || k === 0) return head
  let node = head,
    len = 1
  while (node.next) {
    node = node.next
    len++
  }
  if (k % len === 0) return head
  let rot = len - (k % len)
  // link original last node to original head node
  node.next = head
  // traverse to the new last node
  while (rot > 0) {
    node = node.next
    rot--
  }
  head = node.next
  node.next = null
  return head
}
