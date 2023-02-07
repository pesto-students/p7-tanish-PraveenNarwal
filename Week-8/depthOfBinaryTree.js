
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 
/**
 * @param {TreeNode} root
 * @return {number}
};
 */
var maxDepth = function(root) {
    if(root == null) return 0;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);

    if(left > right){
        return left+1;
    }else{
        return right+1;
    }

    // if(root == null) return 0;
    // if(root.left == null && root.right == null) return 1;
    // let hleft = maxDepth(root.left);
    // let hright = maxDepth(root.right);
    // let ans = Math.max(hleft, hright)+1;
    // return ans;
    // if(!root) return 0
    // let left = maxDepth(root.left)
    // let right = maxDepth(root.right)
    // if(left > right){
    //     return left +1
    // }else{
    // return right +1
    // }
};

// Time complexity:O(n)
// Space complexity:O(1)