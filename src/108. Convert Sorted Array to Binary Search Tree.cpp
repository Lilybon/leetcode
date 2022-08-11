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
    TreeNode* sortedArrayToBST(vector<int>& nums) {
        return build(nums, 0, nums.size());
    }
private:
    TreeNode* build(vector<int>& nums, int start, int end) {
        if (start >= end) {
            return NULL;
        }
        int mid = (start + end) / 2;
        return new TreeNode(
            nums[mid],
            build(nums, start, mid),
            build(nums, mid + 1, end)
        );
    }
};