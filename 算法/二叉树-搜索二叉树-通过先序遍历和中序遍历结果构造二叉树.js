/*
* 前序遍历：第一个节点是根节点
* 中序遍历：根节点左边是左子树，右边是右子树
* 后序遍历：最后一个节点是根节点
*
* */
class Node{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}
/*搜索二叉树*/
class Tree {
    constructor(){
        this.root = null;
    }
    insert(node){
        if(this.root){
            this.searchTree(this.root,node);
        }else{
            this.root = node;
        }
    }
    searchTree(currentNode,newNode){
        let tag = currentNode.key>newNode.key?currentNode.left:currentNode.right;
        if(tag){
            this.searchTree(tag,newNode)
        }else{
            tag= newNode;
        }
    }
}
/*
* 根据二叉树的先序遍历结果和中序遍历结果构造二叉树
* 过程：
* preorderArr[0]
* inorderArr.find()
* inorderArr.slice() inorderArr.slice()
* preorderArr.slice() preorderArr.slice()
* 递归
* 结果：递归--栈，但是只能获取到叶子节点，栈方法构造树比较麻烦，直接在递归过程中构造树就行
*
* */
let preArr = [1,2,4,7,3,5,6,8];
let inArr = [4,7,2,1,5,3,8,6];
let root = new Node(preArr[0]);

divide(root,preArr,inArr);

console.log(root);

function divide(rootNode,preorderArr,inorderArr) {
    if(preorderArr==null||preorderArr.length==1){   //叶子节点终止递归
        return;
    }
    /*
    先序的第一个元素为根节点，preorderArr[0]--根节点；
    根据先序得到的根节点，查找中序中根节点位置；
    中序中根节点左边是左子树，右边右子树；
    左子树的先序第一个元素为左子节点；
    右子树的先序第一个元素为右子节点；
    */
    let index = inorderArr.findIndex(value => value==preorderArr[0]);
    let inleft,inright,preleft,preright;

    preorderArr.splice(0,1);

    if(index==0){ //非叶子节点，且无左子节点
        inright = inorderArr.slice(index+1,inorderArr.length);
        preright = preorderArr.slice(index,inorderArr.length);
        rootNode.right = new Node(preright[0]);
        divide(rootNode.right,preright,inright)
    }else if(index==preorderArr.length){ //非叶子节点，且无右子节点
        inleft = inorderArr.slice(0,index);
        preleft = preorderArr.slice(0,index);
        rootNode.left = new Node(preleft[0]);
        divide(rootNode.left,preleft,inleft);
    }else{
        inleft = inorderArr.slice(0,index);
        inright = inorderArr.slice(index+1,inorderArr.length);
        preleft = preorderArr.slice(0,inleft.length);
        preright = preorderArr.slice(inleft.length,preorderArr.length);
        rootNode.left = new Node(preleft[0]);
        rootNode.right = new Node(preright[0]);
        divide(rootNode.left,preleft,inleft);
        divide(rootNode.right,preright,inright);
    }
}

