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

function sortList(head) {
  if (!head || !head.next) return head
  let slow = head,
    fast = head,
    segment = head
  while (fast && fast.next) {
    segment = slow
    slow = slow.next
    fast = fast.next.next
  }
  segment.next = null
  return merge(sortList(head), sortList(slow))
}

function merge(pre, post) {
  const dummy = new ListNode(undefined)
  let cur = dummy
  while (pre && post) {
    if (pre.val > post.val) {
      cur.next = post
      post = post.next
    } else {
      cur.next = pre
      pre = pre.next
    }
    cur = cur.next
  }
  if (pre) cur.next = pre
  if (post) cur.next = post
  return dummy.next
}
