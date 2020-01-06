/*栈*/
class Strack {
    constructor(items){
        this.items = items?items:[];
    }
    push(item){
        this.items.push(item);
    }
    pop(){
        return this.items.pop();
    }
    size(){
        return this.items.length;
    }
    isEmpty(){
        return this.items.length==0;
    }
}
/*
let strack = new Strack([1,2,3]);
strack.push(4);
strack.push(5);
strack.pop();*/

/*
//队列
class Queue {
    constructor(items){
        this.items = items;
    }
    push(item){
        this.items.push(item);
    }
    shift(){
        this.items.shift();
    }
}

let queue = new Queue([1,2,3]);
queue.push(4);
queue.shift();
*/
/*用两个栈实现队列*/
class Queues {
    constructor(){
        this.strack1 = new Strack();
        this.strack2 = new Strack();
    }
    appendTail(item){
        this.strack1.push(item);
        console.log(this.strack1)
    }
    deleteHead(){
        let len = this.strack1.size();
        for(let i=0;i<len;i++){
            this.strack2.push(this.strack1.pop())
        }
        this.strack2.pop();
        let len2 = this.strack2.size();
        for(let i=0;i<len2;i++){
            this.strack1.push(this.strack2.pop())
        }
        console.log(this.strack1)
    }
}

let queues = new Queues();
queues.appendTail(41);
queues.appendTail(42);
queues.appendTail(43);
queues.appendTail(44);
queues.deleteHead();
queues.appendTail(45);
queues.deleteHead();
