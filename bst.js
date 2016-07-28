function BST() {
    function Node(x) {
        return {
            key: x,
            left: null,
            right: null
        }
    }

    function _insert(node, x) {
        if (x < node.key) {
            if (node.left === null) {
                return node.left = Node(x), 0;
            } else {
                return _insert(node.left, x);
            }
        }
        if (x > node.key) {
            if (node.right === null) {
                return node.right = Node(x), 0;
            } else {
                return _insert(node.right, x);
            }
        }
        if (x === node.key) return 1;
    }

    var root = null;
    return {
        insert: function(x) {
            return root === null ? (root = Node(x), 0) : _insert(root, x);
        }
    }
}