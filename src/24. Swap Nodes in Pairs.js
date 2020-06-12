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

const swapPairs = (head) => {
  const dummy = new ListNode(undefined, head)
  let prev = dummy
  let cur = dummy.next
  while (cur !== null && cur.next !== null) {
    let tmp = cur.next.next
    cur.next.next = cur
    prev.next = cur.next
    cur.next = tmp
    prev = cur
    cur = cur.next
  }
  return dummy.next
}
