/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

export function isPalindrome(head) {
  const middle = findMiddle(head)
  let left = head,
    right = reverseLinkList(middle)
  while (right) {
    if (left.val !== right.val) return false
    left = left.next
    right = right.next
  }
  return true
}

function findMiddle(start) {
  let slow = start,
    fast = start
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

function reverseLinkList(start) {
  let curr = start,
    prev = null
  while (curr) {
    let tmp = curr
    curr = curr.next
    tmp.next = prev
    prev = tmp
  }
  return prev
}
