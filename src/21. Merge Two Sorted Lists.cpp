/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

// Recursive
// class Solution {
// public:
//     ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
//         if (list1 == NULL) {
//             return list2;
//         }
//         if (list2 == NULL) {
//             return list1;
//         }
//         if (list1->val <= list2->val) {
//             list1->next = mergeTwoLists(list1->next, list2);
//             return list1;
//         } else {
//             list2->next = mergeTwoLists(list1, list2->next);
//             return list2;
//         }
//     }
// };

// Dummy
class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        ListNode dummyHead;
        ListNode* current = &dummyHead;
        while (list1 && list2) {
            if (list1->val > list2->val) {
              current->next = list2;
              list2 = list2->next;
            } else {
              current->next = list1;
              list1 = list1->next;
            }
            current = current->next;
        }
        if (list1) current->next = list1;
        if (list2) current->next = list2;
        return dummyHead.next;
    }
};