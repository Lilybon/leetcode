import { MyLinkedList } from '../src/707. Design Linked List'

describe('MyLinkedList', () => {
  test('it executes a linked list', () => {
    const myLinkedList = new MyLinkedList()
    myLinkedList.addAtHead(1)
    myLinkedList.addAtTail(3)
    myLinkedList.addAtIndex(1, 2)
    expect(myLinkedList.get(1)).toBe(2)
    myLinkedList.deleteAtIndex(1)
    expect(myLinkedList.get(1)).toBe(3)
  })
})
