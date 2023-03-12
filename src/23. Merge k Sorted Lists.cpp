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
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        auto comp = [](ListNode* a, ListNode* b) -> bool {
            return a->val > b->val;
        };
        priority_queue<ListNode*, vector<ListNode*>, decltype(comp)> pq(comp);
        for (auto root : lists) {
            if (root) {
                pq.push(root);
            }
        }

        if (pq.empty()) {
            return NULL;
        }

        ListNode* sortedList = pq.top();
        pq.pop();
        if (sortedList->next) {
            pq.push(sortedList->next);
        }

        ListNode* current = sortedList;
        while (!pq.empty()) {
            auto root = pq.top();
            pq.pop();
            current->next = root;
            current = current->next;
            if (root->next) {
                pq.push(root->next);
            }
        }
        return sortedList;
    }
};