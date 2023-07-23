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
    vector<TreeNode*> allPossibleFBT(int n) {
        if (n % 2 == 0) {
            return {};
        }

        vector<vector<TreeNode*>> dp(n + 1);
        dp[1].push_back(new TreeNode(0));

        for (int i = 3; i <= n; i += 2) {
            for (int left = 1; left < i - 1; left += 2) {
                const int right = i - 1 - left;
                for (auto& leftChildren : dp[left]) {
                    for (auto& rightChildren : dp[right]) {
                        TreeNode* node = new TreeNode(0, leftChildren, rightChildren);
                        dp[i].push_back(node);
                    }
                }
            }
        }

        return dp[n];
    }
};