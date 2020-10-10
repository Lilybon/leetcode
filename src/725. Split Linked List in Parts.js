/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */

const splitListToParts = (root, k) => {
  let current = root,
    n = 0,
    result = Array(k).fill(null)
  while (current) {
    current = current.next
    n++
  }
  let remainder = n % k,
    quotient = Math.floor(n / k),
    idx = 0
  current = root
  while (current) {
    let capacity = quotient + (remainder-- > 0),
      payload = 0,
      tail
    result[idx] = current
    while (payload++ < capacity) {
      tail = current
      current = current.next
    }
    tail.next = null
    idx++
  }
  return result
}
