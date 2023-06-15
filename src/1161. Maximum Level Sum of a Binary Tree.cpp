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
    int maxLevelSum(TreeNode* root) {
        queue<TreeNode*> q;
        q.push(root);
        int level = 1, maxSum = -INT_MAX, ans = 0;
        while (!q.empty()) {
            int localSum = 0;
            for (int i = q.size(); i > 0; --i) {
                auto node = q.front();
                q.pop();
                localSum += node->val;
                if (node->left) {
                    q.push(node->left);
                }
                if (node->right) {
                    q.push(node->right);
                }
            }
            if (localSum > maxSum) {
                maxSum = localSum;
                ans = level;
            }
            level++;
        }
        return ans;
    }
};