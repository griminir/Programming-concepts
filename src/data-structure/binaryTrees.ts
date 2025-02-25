// binary search tree left < node < right
// lookup O(log N)
// insert O(log N)
// delete O(log N

class TreeNode {
  value: number;
  leftChild: TreeNode | null;
  rightChild: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class Tree {
  private root: TreeNode | null = null;

  public insert(value: number): void {
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
      } else {
        if (currentNode.rightChild === null) {
          currentNode.rightChild = newNode;
          break;
        }
        currentNode = currentNode.rightChild;
      }
    }
  }

  public find(value: number): boolean {
    let current = this.root;
    while (current !== null) {
      if (value < current.value) {
        current = current.leftChild;
      } else if (value > current.value) {
        current = current.rightChild;
      } else {
        return true;
      }
    }
    return false;
  }

  //made the ai do this for me
  public print(): void {
    this.inOrderTraversal(this.root, null, 'root');
  }

  //made the ai do this for me
  private inOrderTraversal(
    node: TreeNode | null,
    parent: TreeNode | null,
    relation: string
  ): void {
    if (node !== null) {
      this.inOrderTraversal(node.leftChild, node, 'left child');
      console.log(
        `${relation} of ${parent ? parent.value : 'null'}: ${node.value}`
      );
      this.inOrderTraversal(node.rightChild, node, 'right child');
    }
  }

  public traversePreOrder(): void {
    if (this.root) this.preOrder(this.root);
  }

  private preOrder(root: TreeNode): void {
    if (root === null) return;
    console.log(root.value);
    if (root.leftChild) this.preOrder(root.leftChild);
    if (root.rightChild) this.preOrder(root.rightChild);
  }

  public traversePostOrder(): void {
    if (this.root) this.postOrder(this.root);
  }

  private postOrder(root: TreeNode) {
    if (root === null) return;

    if (root.leftChild) this.postOrder(root.leftChild);
    if (root.rightChild) this.postOrder(root.rightChild);
    console.log(root.value);
  }

  // the in order traversal would just be to put log in the middle of the 2 root child if statments
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
