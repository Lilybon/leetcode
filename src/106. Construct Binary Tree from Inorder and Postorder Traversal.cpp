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
    TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
        int n = inorder.size(), postIdx = n - 1;
        return build(inorder, postorder, 0, n - 1, postIdx);
    }

    TreeNode* build(vector<int>& inorder, vector<int>& postorder, int inStart, int inEnd, int& postIdx) {
        if(inStart > inEnd) return NULL;
        TreeNode* root = new TreeNode(postorder[postIdx--]);
        int inIdx = find(inorder.begin(), inorder.end(), root->val) - inorder.begin();
        root->right = build(inorder, postorder, inIdx + 1, inEnd, postIdx);
        root->left  = build(inorder, postorder, inStart, inIdx - 1, postIdx);
        return root;
    }
};