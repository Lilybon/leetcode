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
class BSTIterator {
private:
    stack<TreeNode*> s;
    bool forward;

public:
    BSTIterator(TreeNode* node, bool forward) : forward(forward) {
        while (node) {
            s.push(node);
            node = forward ? node->left : node->right;
        }
    }

    int next() {
        TreeNode* node = s.top();
        s.pop();

        const int val = node->val;
        node = forward ? node->right : node->left;
        while (node) {
            s.push(node);
            node = forward ? node->left : node->right;
        }

        return val;
    }
};
class Solution {
public:
    bool findTarget(TreeNode* root, int k) {
        if(!root) return false;
        BSTIterator left(root, true); 
        BSTIterator right(root, false); 
        
        for (int l = left.next(), r = right.next(); l < r;) {
            const int sum = l + r;
            if (sum < k) l = left.next();
            else if (sum > k) r = right.next();
            else return true;
        }
        return false;
    }
};