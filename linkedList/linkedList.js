class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    let newNode = new Node(value, this.head, null);
    console.log(this, "this in linkedlist");
    console.log(this.head, "newNodenewNode");
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
  }
}
const linkedList = new LinkedList();
console.log(linkedList.addToHead(10));
