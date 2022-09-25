class Node {
  constructor(value, prev, next) {
    this.value = value
    this.prev = prev ?? null
    this.next = next ?? null
  }
}

class MyCircularQueue {
  /**
   * @param {number} k
   */
  constructor(k) {
    this.maxSize = k
    this.size = 0
    this.head = null
    this.tail = null
  }
  /**
   * @param {number} value
   * @return {boolean}
   */
  enQueue(value) {
    if (this.isFull()) return false
    if (this.isEmpty()) this.head = this.tail = new Node(value)
    else {
      const node = new Node(value, this.tail, this.head)
      this.head.prev = this.tail.next = this.head = node
    }
    this.size++
    return true
  }
  /**
   * @return {boolean}
   */
  deQueue() {
    if (this.isEmpty()) return false
    if (this.size === 1) this.head = this.tail = null
    else if (this.size === 2) {
      this.tail = this.head
      this.tail.prev = this.tail.next = null
    } else {
      this.tail.next = null
      this.tail = this.tail.prev
      this.tail.next = this.head
      this.head.prev = this.tail
    }
    this.size--
    return true
  }
  /**
   * @return {number}
   */
  Front() {
    return this.tail?.value ?? -1
  }
  /**
   * @return {number}
   */
  Rear() {
    return this.head?.value ?? -1
  }
  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.size === 0
  }
  /**
   * @return {boolean}
   */
  isFull() {
    return this.size === this.maxSize
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
