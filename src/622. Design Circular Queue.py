class Node:
    def __init__(self, value: int, prev = None, next = None):
        self.value = value
        self.prev = prev
        self.next = next

class MyCircularQueue:

    def __init__(self, k: int):
        self.max_size = k
        self.size = 0
        self.head = None
        self.tail = None

    def enQueue(self, value: int) -> bool:
        if self.isFull():
            return False
        if self.isEmpty():
            self.head = self.tail = Node(value)
        else:
            node = Node(value, self.tail, self.head)
            self.head.prev = self.tail.next = self.head = node
        self.size += 1
        return True

    def deQueue(self) -> bool:
        if self.isEmpty():
            return False
        if self.size == 1:
            self.head = self.tail = None
        elif self.size == 2:
            self.tail = self.head
            self.tail.prev = self.tail.next = None
        else:
            self.tail.next = None
            self.tail = self.tail.prev
            self.tail.next = self.head
            self.head.prev = self.tail
        self.size -= 1
        return True

    def Front(self) -> int:
        return -1 if self.tail is None else self.tail.value

    def Rear(self) -> int:
        return -1 if self.head is None else self.head.value
        

    def isEmpty(self) -> bool:
        return self.size == 0

    def isFull(self) -> bool:
        return self.size == self.max_size
        


# Your MyCircularQueue object will be instantiated and called as such:
# obj = MyCircularQueue(k)
# param_1 = obj.enQueue(value)
# param_2 = obj.deQueue()
# param_3 = obj.Front()
# param_4 = obj.Rear()
# param_5 = obj.isEmpty()
# param_6 = obj.isFull()