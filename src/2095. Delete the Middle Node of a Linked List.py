# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head.next == None:
            return None
        dummy = ListNode(-1, head)
        slow = fast = dummy
        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next
        slow.next = slow.next.next
        return head