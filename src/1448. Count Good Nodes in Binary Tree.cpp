class Solution {
public:
    int goodNodes(TreeNode* root) {
        return preorder(root, INT_MIN);
    }
    int preorder (TreeNode* root, int maxValue) {
        if (root == NULL) return 0;
        maxValue = max(maxValue, root -> val);
        return (root -> val >= maxValue) + preorder(root -> left, maxValue) + preorder(root -> right, maxValue);
    }
};