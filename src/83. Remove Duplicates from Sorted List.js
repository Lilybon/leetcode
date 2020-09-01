/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
const deleteDuplicates = head => {
  let current = head
  while (current) {
    if (current.next && current.val === current.next.val) {
      let start = current
      let end = current
      while (end && start.val === end.val) {
        end = end.next
      }
      start.next = end
    }
    current = current.next
  }
  return head
}
 */

const deleteDuplicates = (head) => {
  let current = head
  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
  return head
}
