//binary search tree construction function name start with capital letter
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
//insert method
// passed just one node with no child nodes

BST.prototype.insert = function (value) {
  // if this value is less than or greater than the current node
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value); //calling insert method recursively
  } else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};

BST.prototype.contains = function (value) {
  // check if the value we are looking matches the value of the node
  if (value === this.value) return true;
  else if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
    // there are two if there is a left child node or not
  } else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};
// root binary search tree
var bst = new BST(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(8);
console.log(bst, "bstbst");
// bst.insert(30);
// bst.insert(70);
// bst.insert(100);
// bst.insert(60);
// bst.insert(59);
// bst.insert(20);
// bst.insert(45);
// bst.insert(35);
bst.insert(35);

// bst.insert(85);
// bst.insert(105);
// bst.insert(10);

console.log(bst.contains(900));

// in order depth will travel through all of the nodes
BST.prototype.depthFirstTraversal = function (iteratorFunc, order) {
  console.log(this, "this key");
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  console.log(this.value, "this.value");
  if (order === "in-order") iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
};

bst.depthFirstTraversal(log, "in-order");
function log(value) {
  console.log(value, "test value");
}
