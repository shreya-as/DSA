// we have value property
// next node and  

function LinkedList() {
  this.head = null;
  this.tail = null;
}
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}
LinkedList.prototype.addToHead = function (value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode 
  this.head=newNode
};




LinkedList.prototype.addToTail=function(value){
var newNode=new Node(value,null,this.tail)
if(this.tail) this.tail.next= newNode
 else this.head=newNode
 this.tail=newNode
}
var ll = new LinkedList();
ll.addToHead(100);
console.log(ll)
var myLl=new LinkedList();
myLl.addToTail(10)
myLl.addToTail(30)
myLl.addToHead(900)

 
console.log(myLl)
console.log(myLl.tail.prev)