"use strict";
// binary search tree left < node < right
// lookup O(log N)
// insert O(log N)
// delete O(log N
class TreeNode {
    constructor(value) {
        this.value = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}
class Tree {
    constructor() {
        this.root = null;
        // the in order traversal would just be to put log in the middle of the 2 root child if statments
    }
    insert(value) {
        let newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        let currentNode = this.root;
        while (true) {
            if (value < currentNode.value) {
                if (currentNode.leftChild === null) {
                    currentNode.leftChild = newNode;
                    break;
                }
                currentNode = currentNode.leftChild;
            }
            else {
                if (currentNode.rightChild === null) {
                    currentNode.rightChild = newNode;
                    break;
                }
                currentNode = currentNode.rightChild;
            }
        }
    }
    find(value) {
        let current = this.root;
        while (current !== null) {
            if (value < current.value) {
                current = current.leftChild;
            }
            else if (value > current.value) {
                current = current.rightChild;
            }
            else {
                return true;
            }
        }
        return false;
    }
    findHeight() {
        if (this.root === null)
            return -1;
        if (this.root)
            return this.height(this.root);
        throw new Error('wrong implimentasjon');
    }
    height(root) {
        if (root.leftChild === null && root.rightChild === null)
            return 0;
        if (root.leftChild && root.rightChild)
            return (1 + Math.max(this.height(root.leftChild), this.height(root.rightChild)));
        // should never be hit
        throw new Error('wrong implementation');
    }
    //made the ai do this for me
    print() {
        this.inOrderTraversal(this.root, null, 'root');
    }
    //made the ai do this for me
    inOrderTraversal(node, parent, relation) {
        if (node !== null) {
            this.inOrderTraversal(node.leftChild, node, 'left child');
            console.log(`${relation} of ${parent ? parent.value : 'null'}: ${node.value}`);
            this.inOrderTraversal(node.rightChild, node, 'right child');
        }
    }
    traversePreOrder() {
        if (this.root)
            this.preOrder(this.root);
    }
    preOrder(root) {
        if (root === null)
            return;
        console.log(root.value);
        if (root.leftChild)
            this.preOrder(root.leftChild);
        if (root.rightChild)
            this.preOrder(root.rightChild);
    }
    traversePostOrder() {
        if (this.root)
            this.postOrder(this.root);
    }
    postOrder(root) {
        if (root === null)
            return;
        if (root.leftChild)
            this.postOrder(root.leftChild);
        if (root.rightChild)
            this.postOrder(root.rightChild);
        console.log(root.value);
    }
}
let binaryTree = new Tree();
binaryTree.insert(7);
binaryTree.insert(4);
binaryTree.insert(9);
binaryTree.insert(1);
binaryTree.insert(6);
binaryTree.insert(8);
binaryTree.insert(10);
//breadth first of this tree would be root:7, leftchild:4 , rightchild:9
// then the children of leftchild, leftchild:1 and rightchild:6
// then the children of the rightchild: leftchild:8 and rightchild:10
// if it was another level to it it would start at leftchild of leftchild
// this is level order traversal
// depth first traversal
// pre-order root left right, print order: 7 4 1 6 9 8 10
// in-order left root right print order: 1 4 6 7 8 9 10 the ai implementation of print
// in- order gives us them in ascending order but if you reverse it you get it in descending order
// post-order left right root print order: 1 6 4 9 8 10 7
binaryTree.print();
console.log(binaryTree.find(10));
console.log(binaryTree.find(27));
binaryTree.traversePreOrder();
console.log('new traversal');
binaryTree.traversePostOrder();
console.log('height' + binaryTree.findHeight());
