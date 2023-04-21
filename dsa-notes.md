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

## Hash Table

Hash tables are a data structure that provides efficient storage and retrieval of key-value pairs. They work by using a hash function to map keys to indices in an array. When a value is added to the hash table, the hash function is applied to the key to determine the index where the value should be stored. When a value is retrieved from the hash table, the hash function is again applied to the key to determine the index where the value is stored, and then the value can be retrieved from that location in the array.

Creating a hash table involves defining the hash function and the underlying array. The size of the array is typically chosen based on the expected number of key-value pairs and the desired level of performance. If the array is too small, it can result in a high number of collisions (when multiple keys map to the same index), while if the array is too large, it can result in wasted memory.

When multiple keys map to the same index, a collision occurs. There are various techniques for resolving collisions, such as chaining (where each index in the array stores a linked list of key-value pairs), open addressing (where the key-value pair is stored in the next available index), or probing (where a search is conducted for the next available index).

One advantage of hash tables is that they provide constant time (O(1)) access to values, regardless of the size of the data set. However, they also have some disadvantages, such as the need for a good hash function, the potential for collisions, and the difficulty of iterating over all the key-value pairs in the hash table in a predictable order.

In addition to storing and retrieving values, hash tables can also be used for other purposes, such as implementing sets or counting occurrences of values.

## Checklist

1. Define the problem:

- copy problem statement verbatim
- highlight, define, clarify key words, phrases, reframe ideas.

2. Identify test cases:

- ask for sample case
- create 2 or 3 new test cases including empty struct. (remember to use the simplest interesting example for whiteboard to keep things easy)

3. Visualize:

- draw input at the top of the vis, and output at bottom.
- work towards middle from both ends and illustrate each step.

4. Plan the algorithm:

- identify intermediate data structures from vis.
- describe in plain language the steps the vis describes

5. Code:

- write code to implement those steps.

6. Verify:

- Use test case to visually walk through code step by step recording the changes in values.
- provide big O analysis,  justifying time and space complexity.
