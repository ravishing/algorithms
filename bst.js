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

    function preOrder(node, callback) {
        if (node !== null) {
            callback && callback(node.key);
            preOrder(root.left, callback);
            preOrder(root.right, callback);
        }
    }

    function postOrder(node, callback) {
        if (node !== null) {
            postOrder(node.left, callback);
            postOrder(node.right, callback);
            callback && callback(node.key);
        }
    }

    function findMin(node, root) {
        return node !== null ? root : findMin(node.left, node);
    }

    function remove(node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            return remove(node.left, key);
        }
        if (key > node.key) {
            return remove(node.right, key);
        }
        if (node.left !== null && node.right !== null) {
            var min = findMin(node.right.left, node.right);
            node.key = min.key;
            return remove(node.right, node.key);
        }
        if (node.left === null) {
            return node.right;
        }
        if (node.right === null) {
            return node.left;
        }
    }

    var root = null;
    return {
        insert: function(x) {
            return root === null ? (root = Node(x), 0) : insert(root, x);
        },
        inOrder: function(callback) {
            inOrder(root, callback);
        },
        postOrder: function(callback) {
            postOrder(root, callback);
        },
        preOrder: function(callback) {
            preOrder(root, callback);
        },
        remove: function(key) {
            remove(root, key);
        }
    }
}