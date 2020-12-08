/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */

export function mergeInBetween(list1, a, b, list2) {
  let pickStart = getNode(list1, a - 1)
  let removedStart = pickStart.next
  pickStart.next = list2
  let removedEnd = getNode(removedStart, b - a)
  let pickEndNext = removedEnd.next
  removedEnd.next = null
  let pickEnd = getNode(pickStart)
  pickEnd.next = pickEndNext
  return list1
}

function getNode(node, step = Infinity) {
  let current = node
  while (step && current.next) {
    current = current.next
    step--
  }
  return current
}
