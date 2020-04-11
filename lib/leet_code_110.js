// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isBalanced(root) {
  if ( !root) return true;
  let leftHeight = depthCounter(root.left)
  let rightHeight = depthCounter(root.right);

  const diff =  Math.abs(leftHeight - rightHeight);
  return isBalanced(root.left) && isBalanced(root.right) && diff <= 1;
}

function depthCounter(treeNode) {
  if (!treeNode) return 0;
  return 1 + Math.max(depthCounter(treeNode.left), depthCounter(treeNode.right))

}
