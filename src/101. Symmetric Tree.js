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
var isSymmetric = function(root) {
    if(root == null || (root.left == null && root.right == null)){
        return true;
    }

    root.right = revertTree(root.right);
    return isSameTree(root.left, root.right);

    function revertTree(node){
        if(node == null || (node.left == null && node.right == null)){
            return node;
        }
        var tmp = revertTree(node.left);
        node.left = revertTree(node.right);
        node.right = tmp;
        return node;
    }

    function isSameTree(left, right){
        if(left == null && right == null){
            return true;
        }

        if((left == null && right != null) || (left !=null && right == null)){
            return false;
        }

        if(left.val != right.val){
            return false;
        }

        return isSameTree(left.left, right.left) && isSameTree(left.right, right.right);
    }
};
