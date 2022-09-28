class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(-1, head)
        left = right = dummy
        while n:
            right = right.next
            n -= 1
        while right.next:
            left = left.next
            right = right.next
        deleted = left.next
        left.next = deleted.next
        deleted.next = None
        return dummy.next