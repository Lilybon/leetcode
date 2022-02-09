class Node {
  constructor(val, next) {
    this.val = val
    this.next = next instanceof Node ? next : null
  }
}

export class MyLinkedList {
  constructor() {
    this.head = this.tail = null
    this.length = 0
  }

  getNode(index) {
    let node = this.head
    while (index > 0) {
      node = node.next
      index--
    }
    return node
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (index < 0 || index >= this.length) return -1
    return this.getNode(index).val
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtHead(val) {
    this.head = new Node(val, this.head)
    if (this.length === 0) this.tail = this.head
    this.length++
  }

  /**
   * @param {number} val
   * @return {void}
   */
  addAtTail(val) {
    const node = new Node(val)
    if (this.length === 0) this.head = node
    else this.tail.next = node
    this.tail = node
    this.length++
  }

  /**
   * @param {number} index
   * @param {number} val
   * @return {void}
   */
  addAtIndex(index, val) {
    if (index < 0 || index > this.length) return
    if (index === 0) {
      this.addAtHead(val)
      return
    }
    if (index === this.length) {
      this.addAtTail(val)
      return
    }
    const prev = this.getNode(index - 1)
    prev.next = new Node(val, prev.next)
    this.length++
  }

  /**
   * @param {number} index
   * @return {void}
   */
  deleteAtIndex(index) {
    if (index < 0 || index >= this.length) return
    if (this.length === 1) {
      this.head = this.tail = null
      this.length--
      return
    }
    if (index === 0) {
      const prev = this.head
      this.head = this.head.next
      prev.next = null
      this.length--
      return
    }
    const prev = this.getNode(index - 1)
    prev.next = prev.next.next
    if (index === this.length - 1) this.tail = prev
    this.length--
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
