# DSA-Notes for whiteboard review

## Linked Lists

linked lists are a data structure where elements are stored in nodes, and each node contains the element in question and a link to the next node. to represent a node in a  linked list a common practice in jaavascript is to create a node class with two properties, the value of the node and the link to the nest node ie. this.value-value; and this.next=null; Then create a Linked List class to manage the nodes, this is sometimes done with a length property , but this is optional as the only only things strictly necessary is this.head=null; to prepare the class to accept the first node in the list.

this example just uses a console to in place of a real function for the purposes of walkthrough, further this function assumes to exist within the linked list class as a method.

- pro:
  allows dynamic resizing
  memory conservative
  memory efficient insertions and deletions
  no "waste" of memory

- cons:
  does not allow for random index access( must walk through entire structure from beginning to find an element)
  sequential access is slow bc data is not stored contiguously like in arrays.

Traversal( aka walk) in Linked Lists is done by iterating through its nodes starting at the head and ending at either the specified element or the tail, which is null. ex:

      traverse() {
        let currentNode = this.head;

        while(current.node != null){
          console.log(currentNode.value);
          currentNode = currentNode.next;
        }
      }

To create a linked list using the class as described above, we declare a const to be a new LinkedList(), we will name it list, then we set list.head to a value, list.head.next to another value and so on.

## Binary Trees

Binary trees share many similarities to linked lists, but have one key difference, instead of a node having a value and a next property, binary tree nodes have a value, a right, and a left property. the right and left properties are functionally the same as a next pointer but allow for two next options instead of one, hence the binary part of binary tree. For a Tree to be Binary each node must have at most two children, a left child and right child. Creating a Binary Tree class is again similar to linked lists, we just use right and left instead of next. ex.  
  class BinaryTree {
    this.root = null;
};
  class TreeNode {
    constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

Another difference from linked lists is that in binary trees, since we have more next options, we also have more traversal options. The three most common are:

  Pre-Order; Root,Left SubTree, Right SubTree
  In-Order; Left SubTree, Root, Right Subree
  Post-Order; Left SubTree, Right Subtree, Root

ex.
  Pre-Order: PreOrderTraversal(node) { //starting at root
    if (node !== null){
      console.log(node.value); //placeholder for actual function call
      PreOrderTraversal(node.left); // rucursively print left node
      PreOrderTraversal(node.right);//recursively print right node.
    }
  }
  In-Order: InOrderTraversal(node){
    if( node !== null){
      InOrderTraversal(node.left);
      console.log(node.value);
      InOrderTraversal(node.right);
    }
  }
  Post-Order: PostOrderTraversal(node){
    if(node !== null){
      PostOrderTraversal(node.left);
      PostOrderTraversal(node.right);
      console.log(node.value);
    }
  }

## Binary Search Tree

Binary search trees are a subtype of binary trees, which follow three rules;

  1. the values of the left children of the parent are less than the parent node value.
  2. the values of the right children of the parent node are greater than the parent node value. 
  3. both left and right subtrees are also binary search trees.

due to these rules, some patterns can be extracted. 

an In-Order Traversal print out of a BST will always have the elements in ascending order.
a Pre-Order Traversal print out of a BST is useful in recursively reconstructing a binary tree from a set of data values.
a Post-Order Travsersal is useful when performing operations that depend on processing children before their parent, such as deleting nodes in a tree or evaluating expressions in a syntax tree. In post-order traversal, the left and right subtrees are visited before the root node, ensuring that any required operations on child nodes are completed before processing the parent.
