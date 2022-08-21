/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 var maxDepth = function(root) {
    if(!root) return 0;
    let max = 1;
    findDepth(root);
    return max;
    
    function findDepth(root, count = 0) {
        if (root) {
            findDepth(root.left, count + 1);
            findDepth(root.right, count + 1);
        }
        max = Math.max(max, count);
    }
};