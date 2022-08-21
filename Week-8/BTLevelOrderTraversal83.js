/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    // handle edge case
    if (!root) return [];
	
    // init variables
    const res = [], queue = [root];
    let levelSize;

    // loop whie queue is not empty
    while (queue.length > 0) {
        // track number of elements at each level via queue length.
        levelSize = queue.length;
        const currLevelVals = [];
        
        while (levelSize > 0) {
            // shift from queue (FIFO)
            const currNode = queue.shift();
            
            // push value to subarray, 
            // and push left and right child (if exists) to queue
            currLevelVals.push(currNode.val);
            if (currNode.left) queue.push(currNode.left);
            if (currNode.right) queue.push(currNode.right);
            
            // decrement size of level
            levelSize--;
        }
        // push array of nodes at current level
        res.push(currLevelVals);        
    }
    return res;
};