function BST() {
    function Node(x) {
        return {
            key: x,
            left: null,
            right: null
        }
    }

    function insert(node, x) {
        if (x < node.key) {
            if (node.left === null) {
                return node.left = Node(x), 0;
            } else {
                return insert(node.left, x);
            }
        }
        if (x > node.key) {
            if (node.right === null) {
                return node.right = Node(x), 0;
            } else {
                return insert(node.right, x);
            }
        }
        if (x === node.key) return 1;
    }

    function inOrder(node, callback) {
        if (node !== null) {
            inOrder(node.left, callback);
            callback && callback(node.key);
            inOrder(node.right, callback);
        }
    }

    var root = null;
    return {
        insert: function(x) {
            return root === null ? (root = Node(x), 0) : insert(root, x);
        },
        inOrder: function(callback) {
            inOrder(root,callback);
        }
    }
}