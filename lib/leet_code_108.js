// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// nums = [-10, -3, 0, 5, 9]


var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return null;

    const midIndex = Math.floor(nums.length / 2);
    const rootNode = new TreeNode(nums[midIndex]);
    const leftSide = nums.slice(0,midIndex);
    const rightSide = nums.slice(midIndex + 1);
    rootNode.left = sortedArrayToBST(leftSide);
    rootNode.right = sortedArrayToBST(rightSide);

    return rootNode;

};


nums = [0, 1, 2, 3, 4, 5]

console.log(sortedArrayToBST(nums))
