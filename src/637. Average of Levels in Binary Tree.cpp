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
    vector<double> averageOfLevels(TreeNode* root) {
        queue<TreeNode*> q;
        q.push(root);
        vector<double> results;
        while (!q.empty()) {
            double sum = 0;
            int count = q.size();
            for (int i = 0; i < count; ++i) {
                TreeNode* node = q.front();
                q.pop();
                sum += double(node->val);
                if (node->left) q.push(node->left);
                if (node->right) q.push(node->right);
            }
            results.push_back(sum / count);
        }
        return results;
    }
};