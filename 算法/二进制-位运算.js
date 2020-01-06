/*求一个十进制数的二进制数中1的个数*/
function f(num) {
    if(num==0 || num==1){
        return num;
    }
    return f(Math.floor(num/2))+num%2;
}
console.log(f(5));
/*
* 位运算：计算机机器语言--二进制，效率肯定比十进制的运算高
* 左移<<  *2
* 右移>>  /2 向下取整
----------------------------------
&	与	    两个位都为1时，结果才为1
|	或	    两个位都为0时，结果才为0
^	异或	两个位相同为0，相异为1
~	取反	0变1，1变0
<<	左移	各二进位全部左移若干位，高位丢弃，低位补0
>>	右移	各二进位全部右移若干位，对无符号数，高位补0，有符号数，各编译器处理方法不一样，有的补符号位（算术右移），有的补0（逻辑右移）
-----------------------------------
* */
function f1(num) {
    let count = 0;
    let flag = 1;
    while (flag){
        if(num&flag){
            count++;
        }
        flag = flag<<1;
    }
}
function f2(num) {
    let count = 0;
    while (num){
        count++;
        num = (num-1) & num;
    }
    return count;
}

console.log(f2(9));
