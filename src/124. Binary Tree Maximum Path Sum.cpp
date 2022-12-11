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
    int ans = -1000;
    int dfs(TreeNode* root) {
        if (!root) return -1000;
        int leftSum = dfs(root->left),
            rightSum = dfs(root->right),
            twoPathSum = root->val + leftSum + rightSum,
            singlePathSum = root->val + max({ leftSum, rightSum, 0 });
        ans = max({ ans, leftSum, rightSum, singlePathSum, twoPathSum });
        return singlePathSum;
    }
public:
    int maxPathSum(TreeNode* root) {
        dfs(root);
        return ans;
    }
};