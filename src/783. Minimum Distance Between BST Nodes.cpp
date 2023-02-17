/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int minDiffInBST(TreeNode* root) {
        stack<TreeNode*> st;
        TreeNode* curr = root;
        int prev = -1 * pow(10, 5),
            ans = INT_MAX;

        while (curr || !st.empty()) {
            while (curr) {
                st.push(curr);
                curr = curr->left;
            }
            curr = st.top();
            cout << curr->val << endl;
            st.pop();
            int dist = abs(curr->val - prev);
            ans = min(ans, dist);
            prev = curr->val;
            curr = curr->right;
        }

        return ans;
    }
};