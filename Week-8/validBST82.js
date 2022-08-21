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
 * @return {boolean}
 */
 var isValidBST = function(root) {
    let inorderList = inorder(root,[])
    
    return !hasDuplicates(inorderList) ? arraySortedOrNot(inorderList,inorderList.length):false
    };


function arraySortedOrNot(arr, n)
    {
        if (n == 1 || n == 0)
            return 1;
 
        if (arr[n - 1] < arr[n - 2])
            return 0;
 
        return arraySortedOrNot(arr, n - 1);
    }

function inorder(root,inorderList){
    if(!root) return inorderList;
    
    inorder(root.left,inorderList);
    inorderList.push(root.val);
    inorder(root.right,inorderList);
    
    return inorderList
}

 function hasDuplicates(array) {
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (value in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}