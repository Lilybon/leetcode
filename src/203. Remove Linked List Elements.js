/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

function removeElements(head, val) {
  if (head === null) return null

  // imaginary node which target for:
  // 1.return the node.next
  // 2.easy to handle transfer link list relation
  let node = new ListNode(null)

  node.next = head
  let prevNode = node
  let currNode = head

  while (currNode !== null) {
    if (currNode.val === val) prevNode.next = currNode.next
    // trasfer relation
    else prevNode = currNode // do nothing
    currNode = currNode.next // next iteration
  }
  return node.next
}
