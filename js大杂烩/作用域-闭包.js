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
            //let i = 0;//ES6块作用域
        }
        console.log(i)
    }
    f()//0,没有块级作用域
}

/*
闭包：
一种特性，即函数对象可以通过作用域链相互关联起来，函数体内部的变量都可以保存在函数作用域内
函数定义时的作用域链在函数执行时依然有效
如下列：
当调用函数时闭包所指向的作用域链和定义函数时的作用域链不是同一个时，
例如当一个函数乔涛另一个函数，外部函数将嵌套的函数作为返回值返回的时候，
*/
{
    var scope = 'global';
    function f1() {
        var scope = 'local';
        function f2() {
            console.log(scope);
            return scope;
        }
        return f2();
    }
    f1()
}
{
    var scope = 'global';
    function f1() {
        var scope = 'local';
        function f2() {
            console.log(scope);
            return scope;
        }
        return f2;
    }
    f1()()  //不管f2在何时何地执行，绑定的作用域链仍然是函数定义时创建的。
}

/*立即执行函数IIFE：创建私有作用域，定义私有属性私有函数*/
{
    (function () {
        //模块代码
    })();
    //等价于下
    function f() {
        //模块代码
    }
    f()
}

/*利用闭包共享私有状态*/
{
    function f2() {
        var n = 0;
        return {
            add: function () {
                return n++
            },
            reset: function () {
                n = 0;
            }
        }
    }
    var obj1 = f2();
    var obj2 = f2();
    obj1.add();
    obj2.add();
    obj1.reset();
    obj1.add();
    obj2.add();
    //obj1 obj2互不影响，都能访问彼此的私有变量n
}
