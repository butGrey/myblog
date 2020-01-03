/*
* 链表：
* 单向链表：头，节点（下一节点），操作
* 双向链表：头，节点（上一节点，下一节点），操作
* 环形链表：节点（上一节点，下一节点），操作
* 增 删 改 查
*
* */
class LinkedList {
    constructor(headNode){
        this.headNode = headNode;
    }
    insert(node){
        if(this.headNode){
            node.nextNode = this.headNode.nextNode;
            this.headNode.nextNode = node;
        }else{
            this.headNode = node;
            this.headNode.nextNode = null;
        }
    }
}

class Node {
    constructor(node,nextNode){
        this.node = node;
        this.nextNode = nextNode;
    }
}

/*let head = new Node(0,null);
let node1 = new Node(11,null);
let node2 = new Node(12,null);
let node3 = new Node(13,null);
let linkedList = new LinkedList(head);
linkedList.insert(node1);
linkedList.insert(node2);
linkedList.insert(node3);*/

let node3 = new Node(3,null);
let node2 = new Node(2,node3);
let node1 = new Node(1,node2);
let head = new Node(0,node1);
let linkedList = new LinkedList(head);

let current = linkedList.headNode;
/*倒叙输出链表，两种解法：
* 1.定时器，存在弊端，两个定时器之间的时间差小于js编译执行的时间，可能接近同步执行；
* 2.链表只能从头开始查找，所以是一种先进后出-->栈-->递归*/
f1(current);
function f1() {
    let i = 1;
    while (current){
        setTimeout((current)=>{//current在定时器内部存在异步问题，两种解法：1.定时器的第三个参数；2.立即执行函数
            console.log(current.node);
        },100/i++,current);
    /*    ((current)=>{
            setTimeout(()=>{
                console.log(current.node);
            },100/i++)
        })(current);*/
        current = current.nextNode;
    }
}
function f2(current) {
    if(current.nextNode){
        f2(current.nextNode)
    }
    console.log(current.node)
}
