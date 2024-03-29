/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverseList(head) {
  let node = head,
    prevNode = null,
    tmp
  while (node) {
    tmp = node.next
    node.next = prevNode
    prevNode = node
    node = tmp
  }
  return prevNode
}
