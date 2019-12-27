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

/*立即执行函数IIFE：模仿块级作用域，创建私有作用域，定义私有属性私有函数*/
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
{
    let name = 'Tom';
    (function() {//如果加形参，则不会改变原name，如果不加形参且内部没有var name，则改变原name
        if (typeof name == 'undefined') {
            name = 'Jack';
            console.log('Goodbye ' + name);
        } else {
            name = 'bai';
            console.log('Hello ' + name);
        }
    })();
    console.log('Hello ' + name);//bai
}

{
    let name = 'Tom';
    (function(name) {
        if (typeof name == 'undefined') {
            name = 'Jack';
            console.log('Goodbye ' + name);//jack
        } else {
            name = 'bai';
            console.log('Hello ' + name);
        }
    })();//没入参name，则形参==undefined
    console.log('Hello ' + name);//tom
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
/*
闭包中的this
this 对象是在运行时基于函数的执行环境绑定的：在全局函数中，this 等于window，
而当函数被作为某个对象的方法调用时，this 等于那个对象。
匿名函数的执行环境具有全局性，因此其this 对象通常指向window。
*/

{
    var name = "The Window";
    var object = {
        name : "My Object",
        getNameFunc : function(){
            //return this.name //my object
            return function(){
                return this.name; //the window
            };
        }
    };
    console.log(object.getNameFunc()()); //"The Window"（在非严格模式下）
}
/*
内存泄漏：由于闭包的存在，外部函数的变量始终被引用着，闭包不结束，则引用始终存在，内存也就不会被回收
*/
{
    //内存泄露
    function person(){
        var element=document.getElementById("someElement")
        element.onclick=function(){
            alert(element.id)
        }
    }

    //解决内存泄露
    function person(){
        var element=document.getElementById("someElement")
        var id=element.id    //将所需内容赋值给一个变量
        element.onclick=function(){
            alert(id)
        }
        element=null         //闭包会引用包含函数的整个活动对象,其中包含着element
    }
}
