/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {number[]}
 */

// Intuitive solution (terrible runtime and memory usage)
/*
const nextLargerNodes = head => {
  let result = []
  let i = head
  while (i) {
    let j = i.next
    while (j) {
      if (j.val > i.val) {
        result.push(j.val)
        break
      }
      j = j.next
    }
    if (!j) result.push(0)
    i = i.next
  }
  return result
}
 */

// Stack
const nextLargerNodes = (head) => {
  let vals = [],
    stack = [],
    current = head
  while (current) {
    vals.push(current.val)
    current = current.next
  }
  let result = new Uint32Array(vals.length)
  for (let i = 0; i < vals.length; i++) {
    while (stack.length && vals[stack[stack.length - 1]] < vals[i]) {
      result[stack.pop()] = vals[i]
    }
    stack.push(i)
  }
  return result
}
