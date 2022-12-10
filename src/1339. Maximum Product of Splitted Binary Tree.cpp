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
    long long ans = 1, totalSum = 0;
    int dfs(TreeNode* root) {
        if (!root) return 0;
        int currSum = root->val + dfs(root->left) + dfs(root->right);
        ans = max(ans, (totalSum - currSum) * currSum);
        return currSum;
    }
public:
    int maxProduct(TreeNode* root) {
        totalSum = dfs(root);
        dfs(root);
        return ans % 1000000007;
    }
};