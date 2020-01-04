/*
* 链表：
* 单向链表：头，节点（下一节点），操作
* 双向链表：头，节点（上一节点，下一节点），操作
* 环形链表：节点（上一节点，下一节点），操作
* 增 删 改 查
*
* */
class Node {
    constructor(key,nextNode){
        this.key = key;
        this.nextNode = nextNode;
    }
}
class LinkedList {
    constructor(){
        this.headNode = null;
    }
    insert(key,nextNode){
        let newNode = new Node(key,null);
        if(this.headNode){
            if(nextNode){
                let current = this.headNode;
                while(current.nextNode){
                    if(current.nextNode == nextNode){
                        current.nextNode = newNode;
                        newNode.nextNode = nextNode;
                        break;
                    }else{
                        current = current.nextNode;
                    }
                }
            }else{
                newNode.nextNode = this.headNode.nextNode;
                this.headNode.nextNode = newNode;
            }
        }else{
            this.headNode = newNode;
            this.headNode.nextNode = null;
        }
        return newNode;
    }
}

let linkedList = new LinkedList();
linkedList.insert(0,null);
let node1 = linkedList.insert(1,null);
linkedList.insert(2,null);
linkedList.insert(3,node1);


let current = linkedList.headNode;
/*倒叙输出链表，两种解法：
* 1.定时器，存在弊端，两个定时器之间的时间差小于js编译执行的时间，可能接近同步执行；
* 2.链表只能从头开始查找，所以是一种先进后出-->栈-->递归*/
f1(current);
function f1() {
    let i = 1;
    while (current){
        setTimeout((current)=>{//current在定时器内部存在异步问题，两种解法：1.定时器的第三个参数；2.立即执行函数
            console.log(current.key);
        },100/i++,current);
    /*    ((current)=>{
            setTimeout(()=>{
                console.log(current.key);
            },100/i)
        })(current);*/
        current = current.nextNode;
    }
}
function f2(current) {
    if(current.nextNode){
        f2(current.nextNode)
    }
    console.log(current.key)
}
