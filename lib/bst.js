class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let currentNode = this.root; // ASK BRYCE!!!!
        let newNode = new TreeNode(val);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        while (currentNode) {
            if (val < currentNode.val) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    searchRecur(val, currentNode = this.root) {
        if (!currentNode) return false;
        if (currentNode.val === val) return true;

        if (val < currentNode.val) {
            return this.searchRecur(val, currentNode.left)
        }

        return this.searchRecur(val, currentNode.right)

    }

    searchIter(val) {
        let currentNode = this.root;
        while (currentNode) {
            if (val < currentNode.val) {
                currentNode = currentNode.left
            } else if (val > currentNode.val) {
                currentNode = currentNode.right
            } else {
                return true
            }
        }

        return false
    }
}

module.exports = {
    TreeNode,
    BST
};
