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
class Solution {
public:
    ListNode* swapPairs(ListNode* head) {
        ListNode *dummy = new ListNode(-1, head),
            *prev = dummy,
            *curr = head;
        while (curr && curr->next) {
            ListNode* tmp = curr->next;
            prev->next = tmp;
            curr->next = tmp->next;
            tmp->next = curr;
            prev = curr;
            curr = curr->next;
        }
        return dummy->next;
    }
};