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
    string serialize(TreeNode* node, unordered_map<string, vector<TreeNode*>>& map) {
        if (!node) {
            return "";
        }
        string key = "(" + serialize(node->left, map) + to_string(node->val) + serialize(node->right, map) + ")";
        map[key].push_back(node);
        return key;
    }
public:
    vector<TreeNode*> findDuplicateSubtrees(TreeNode* root) {
        unordered_map<string, vector<TreeNode*>> map;
        vector<TreeNode*> ans;
        serialize(root, map);
        for (auto itr = map.begin(); itr != map.end(); ++itr) {
            if (itr->second.size() > 1) {
                ans.push_back(itr->second[0]);
            }
        }
        return ans;
    }
};