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
private:
    vector<int> getLeafValueSequence(TreeNode* root) {
        vector<int> sequence;
        if (!root) {
            return sequence;
        }
        stack<TreeNode*> st;
        TreeNode* curr = root;
        while (curr || !st.empty()) {
            while (curr) {
                st.push(curr);
                curr = curr->left;
            }
            curr = st.top();
            st.pop();
            if (!curr->left && !curr->right) {
                sequence.push_back(curr->val);
            }
            curr = curr->right;
        }
        return sequence;
    }
public:
    bool leafSimilar(TreeNode* root1, TreeNode* root2) {
        vector<int> sequence1 = getLeafValueSequence(root1);
        vector<int> sequence2 = getLeafValueSequence(root2);
        return sequence1 == sequence2;
    }
};