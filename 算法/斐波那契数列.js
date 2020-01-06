/*
*   1和2的斐波那契数是 1；
    n（n>2）的斐波那契数是(n1)的斐波那契数加上(n2)的斐波那契数。
* */
function fibo(num) {
    if(num==1||num==2){
        return 1;
    }
    return fibo(num-1)+fibo(num-2);
}
/*
* 由于递归算法存在大量重复运算，性能十分低
* 反过来算
* */
function fibos(num) {
    let left = right = 1;
    let root;
    for(let i=0;i<num-2;i++){
        root = left+right;
        right = left;
        left = root;
    }
    return root;
}

console.log(fibo(6));
console.log(fibos(6));
console.log(fibo(11));
console.log(fibos(11));
