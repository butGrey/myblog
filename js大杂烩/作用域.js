/*
执行环境：定义变量或函数有权访问的其他数据，决定了他们各自的行为。
作用域链：保证对执行环境有权访问的所有对象和函数的有序访问。
变量作用域：程序源代码中定义这个变量的区域。
函数作用域：ES5没有块级作用域，只有函数作用域，ES6有块级作用域
*/
{
    var color = "blue";
    function changeColor(){
        var color;//函数内没有定义color的时候，向外层找color，有局部变量优先使用局部变量，更改的也只是局部变量
        color;//不加var则声明的是全局变量，同名时会修改全局变量的值
        if (color === "blue"){
            color = "red";
        } else {
            color = "green";
        }
        console.log("Color is in " + color);
    }
    changeColor();
    console.log("Color is out " + color);
}

{
    function f() {
        if(true){
            var i = 0;
        }
        console.log(i)
    }
    f()//0,没有块级作用域
}
