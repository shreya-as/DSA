// we have value property 
// next node and prevnode 

function LinkedList(){
    this.head=null;
    this.tail=null;
    
}
function Node(value, next , prev) {
this.value=value;
this.next=next;
this.prev= prev;

}
var node1= new Node(100,"node2",null);
console.log(node1);
var LL =new LinkedList();
var userList =new LinkedList();
var toDoList = new LinkedList();
console.log(LL)