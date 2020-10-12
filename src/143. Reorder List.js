/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

function reorderList(head) {
  if (!head) return head
  const list = []
  let current = head
  while (current) {
    list.push(current)
    current = current.next
  }
  const n = list.length
  for (let i = 0; i < Math.floor(n / 2); i++) {
    list[i].next = list[n - i - 1]
    list[n - i - 1].next = list[i + 1]
  }
  list[Math.floor(n / 2)].next = null
  return head
}
