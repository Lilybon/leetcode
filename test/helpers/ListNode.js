export class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function createLinkList(nums) {
  const dummyHead = new ListNode()
  let current = dummyHead
  for (let num of nums) {
    current.next = new ListNode(num)
    current = current.next
  }
  return dummyHead.next
}
