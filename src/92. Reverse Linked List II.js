/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

function reverseBetween(head, m, n) {
  if (m === n) return head
  let position = 0
  let dummyHead = new ListNode(undefined, head)
  let current = dummyHead
  let mBefore
  let mNode
  let nNode
  let nNext

  // step1: anchor address
  while (current) {
    if (position === m - 1) {
      mBefore = current
      mNode = mBefore.next
    }
    if (position === n) {
      nNode = current
      nNext = nNode.next
    }
    position++
    current = current.next
  }

  // step2: reverse list
  current = mNode
  let after = nNext
  while (true) {
    let before = current.next
    current.next = after
    if (current === nNode) break
    after = current
    current = before
  }
  mBefore.next = nNode
  return dummyHead.next
}
