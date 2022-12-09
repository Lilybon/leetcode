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
    int maxDiff = 0;
    void dfs(TreeNode* root, int currMax, int currMin) {
        if (!root) return;
        int currMaxDiff = max(abs(currMax - root->val), abs(currMin - root->val));
        maxDiff = max(maxDiff, currMaxDiff);
        currMax = max(currMax, root->val);
        currMin = min(currMin, root->val);
        dfs(root->left, currMax, currMin);
        dfs(root->right, currMax, currMin);
    }
public:
    int maxAncestorDiff(TreeNode* root) {
        dfs(root, root->val, root->val);
        return maxDiff;
    }
};