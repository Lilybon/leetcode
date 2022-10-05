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

// DFS
// class Solution {
// public:
//     TreeNode* addOneRow(TreeNode* root, int val, int depth) {
//         if (depth == 1) return new TreeNode(val, root, NULL);
//         graft(root, val, depth);
//         return root;
//     }
//     void graft(TreeNode* root, int val, int depth) {
//         if (!root) return;
//         if (depth == 2) {
//             root->left = new TreeNode(val, root->left, NULL);
//             root->right = new TreeNode(val, NULL, root->right);
//             return;
//         }
//         graft(root->left, val, depth - 1);
//         graft(root->right, val, depth - 1);
//     }
// };

// BFS
class Solution {
public:
    TreeNode* addOneRow(TreeNode* root, int val, int depth) {
        TreeNode* dummy = new TreeNode(0, root, NULL);
        queue<TreeNode*> q;
        q.push(dummy);
        for (int i = 0; i < depth - 1; ++i) {
            for (int j = q.size(); j > 0; --j) {
                TreeNode* node = q.front();
                q.pop();
                if (node->left) q.push(node->left);
                if (node->right) q.push(node->right);
            }
        }
        while (!q.empty()) {
            TreeNode* node = q.front();
            node->left = new TreeNode(val, node->left, NULL);
            node->right = new TreeNode(val, NULL, node->right);
            q.pop();
        }
        return dummy->left;
    }
};