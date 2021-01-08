import { createLinkList } from './helpers/ListNode'
import { isPalindrome } from '../src/234. Palindrome Linked List'

describe('isPalindrome', () => {
  test('it determines if it is a palindrome given a singly linked list', () => {
    const list1 = createLinkList([1, 2])
    expect(isPalindrome(list1)).toBe(false)

    const list2 = createLinkList([1, 2, 2, 1])
    expect(isPalindrome(list2)).toBe(true)
  })
})
