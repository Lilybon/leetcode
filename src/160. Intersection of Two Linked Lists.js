/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

export function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null
  let nA = getListLength(headA),
    nB = getListLength(headB),
    longHead = nA > nB ? headA : headB,
    shortHead = nA > nB ? headB : headA,
    step = Math.abs(nA - nB)
  while (step) {
    longHead = longHead.next
    step--
  }
  while (longHead && shortHead) {
    if (longHead === shortHead) return longHead
    longHead = longHead.next
    shortHead = shortHead.next
  }
  return null
}

function getListLength(head) {
  let n = 0,
    current = head
  while (current) {
    n++
    current = current.next
  }
  return n
}
