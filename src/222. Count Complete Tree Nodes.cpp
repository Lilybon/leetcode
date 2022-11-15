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
    int countNodes(TreeNode* root) {
        int hLeft = 0, hRight = 0;
        TreeNode *pLeft = root, *pRight = root;

        while (pLeft) {
            hLeft++;
            pLeft = pLeft->left;
        }

        while (pRight) {
            hRight++;
            pRight = pRight->right;
        }

        return hLeft == hRight
            ? pow(2, hLeft) - 1
            : 1 + countNodes(root->left) + countNodes(root->right);
        }
};