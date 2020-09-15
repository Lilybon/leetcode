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

const deleteDuplicates = (head) => {
  const dummy = new ListNode()
  let saved = dummy
  let current = head
  while (current) {
    if (!current.next || current.val !== current.next.val) {
      saved.next = current
      saved = saved.next
      current = current.next
    } else {
      saved.next = null // cut down saved node's next due to posibility of duplicate end
      let node = current
      while (node && node.val === current.val) node = node.next
      current = node
    }
  }
  return dummy.next
}
