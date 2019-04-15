/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return isValidBST_Recursive(root, -Infinity, Infinity);
    function isValidBST_Recursive(node, min, max){
        if (node === null) return true;
        if (node.val >= max || node.val <= min) return false;
        return isValidBST_Recursive(node.right, node.val, max) && isValidBST_Recursive(node.left, min, node.val);
    }
};
