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
// class Solution {
// public:
//     int pairSum(ListNode* head) {
//         ListNode *curr = head;
//         deque<int> d;
//         int maxTwinSum = 0;
//         while (curr) {
//             d.push_back(curr->val);
//             curr = curr->next;
//         }
//         while (!d.empty()) {
//             int twinSum = d.front() + d.back();
//             maxTwinSum = max(maxTwinSum, twinSum);
//             d.pop_front();
//             d.pop_back();
//         }
//         return maxTwinSum;
//     }
// };
class Solution {
public:
    int pairSum(ListNode* head) {
        ListNode *slow = head, *fast = head;
        int maxTwinSum = 0;
        while (fast && fast->next) {
            slow = slow->next;
            fast = fast->next->next;
        }

        ListNode *fromTail = nullptr;
        while (slow) {
            ListNode* tmp = slow;
            slow = slow->next;
            tmp->next = fromTail;
            fromTail = tmp;
        }

        ListNode *fromHead = head;
        while (fromHead && fromTail) {
            maxTwinSum = max(maxTwinSum, fromHead->val + fromTail->val);
            fromHead = fromHead->next;
            fromTail = fromTail->next;
        }
        return maxTwinSum;
    }
};