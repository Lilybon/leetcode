/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function addTwoNumbers(l1, l2) {
  const dummyHead = new ListNode(null)
  let node1 = l1,
    node2 = l2,
    carry = 0,
    newNode = dummyHead
  while (node1 || node2) {
    const val1 = node1 ? node1.val : 0
    const val2 = node2 ? node2.val : 0
    const sum = val1 + val2 + carry
    newNode.next = new ListNode(sum % 10)
    // calc the next carry value after node pushed.
    carry = Math.floor(sum / 10)

    node1 = node1 ? node1.next : node1
    node2 = node2 ? node2.next : node2
    newNode = newNode.next
  }
  // if both lists travel to end and the final sum digit surpass.
  carry > 0 && (newNode.next = new ListNode(carry))
  return dummyHead.next
}
