
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {

    return checkBST(root,-Infinity ,Infinity)
 };
 
 function checkBST(root,min,max){
      if(root == null){
         return true;
     }
 
     if(root.val >= max || root.val <= min){
         return false;
     }
 
     return checkBST(root.left,min,root.val) && checkBST(root.right,root.val,max)
 
 }

// Time complexity:O(N)
// Space complexity:O(1)