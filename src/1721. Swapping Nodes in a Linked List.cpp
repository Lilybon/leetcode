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
    ListNode* swapNodes(ListNode* head, int k) {
        ListNode *curr = head, *left = nullptr, *right = head;
        while (--k) {
            curr = curr->next;
        }
        left = curr;
        curr = curr->next;
        while (curr) {
            curr = curr->next;
            right = right->next;
        }
        swap(left->val, right->val);
        return head;
    }
};