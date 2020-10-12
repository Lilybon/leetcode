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
function oddEvenList (head) {
  if (!head || !head.next) return head
  let cur = head,
      dummyhead = new ListNode(undefined),
      dummycur = dummyhead
  while (cur && cur.next) {
    dummycur.next = cur.next
    dummycur = dummycur.next
    if (dummycur.next) {
      cur.next = dummycur.next
      dummycur.next = null
      cur = cur.next
    } else {
      cur.next = dummyhead.next
      dummycur.next = null
      return head
    }
  }
  cur.next = dummyhead.next
  return head
}
 */

function oddEvenList(head) {
  if (!head) return head
  let odd = head,
    evenhead = head.next,
    even = evenhead
  while (even && even.next) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }
  odd.next = evenhead
  return head
}
