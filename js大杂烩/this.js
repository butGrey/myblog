/*
this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调
用时的各种条件。this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。
this绑定方式有四种：默认绑定、隐式绑定、显示绑定、new绑定
把null 或者undefined 作为this 的绑定对象传入call、apply 或者bind，这些值在调用时会被忽略，实际应用的是默认绑定规则
DMZ非军事区对象Object.create(null)--一个空的非维多的对象，忽略this绑定时总是传入DMZ对象
Object.create(null) 和{} 很像， 但是并不会创建Object.prototype 这个委托，显式指定NULL作为它的原型，所以它绝对没有属性，甚至没有构造函数、toString、hasOwnProperty属性
*/
//箭头函数会捕获调用时的this，箭头函数的绑定无法被修改。（new 也不行！）
{
    function foo() {
        setTimeout(() => {
            console.log( this.a );// 这里的this 在此法上继承自foo()
        },100);
    }
    var obj = {
        a:2
    };
    var bar = foo.call( obj ); // 2
    bar.call( obj ); // 2, 不是3 ！
}
/*默认绑定（在非strict mode 下时，默认绑定才能绑定到全局对象；严格模式下undefined）*/
{
    var a = 2;
    function foo() {
        console.log( this.a );
    }
    foo();//严格模式undefined，非严格模式2
}
/*隐式绑定（当函数引用有上下文对象时，隐式绑定规则会把函数调用中的this 绑定到这个上下文对象。）*/
{
    function foo() {
        console.log( this.a );
    }
    var obj2 = {
        a: 42,
        foo: foo
    };
    var obj1 = {
        a: 2,
        obj2: obj2
    };
    obj1.obj2.foo(); // 42 对象属性引用链中只有最顶层或者说最后一层会影响调用位置
}
{
    function foo() {
        console.log( this.a );
    }
    var obj = {
        a: 2,
        foo: foo
    };
    var bar = obj.foo; // bar引用的是foo 函数本身
    var a = "oops, global"; // a 是全局对象的属性
    bar(); // "oops, global"
}
{
    function foo() {
        console.log( this.a );
    }
    function doFoo(fn) {// fn 其实引用的是foo
        fn(); // <-- 调用位置！
    }
    var obj = {
        a: 2,
        foo: foo
    };
    var a = "oops, global"; // a 是全局对象的属性
    doFoo( obj.foo ); // "oops, global"
}
{
    var obj = {
        a: 2,
        foo: foo
    };
    var a = "oops, global"; // a 是全局对象的属性
    setTimeout( obj.foo, 100 ); // "oops, global"
    //JavaScript 环境中内置的setTimeout() 函数实现和下面的伪代码类似：
    function setTimeout(fn,delay) {
        // 等待delay 毫秒
        fn(); // <-- 调用位置！
    }
}
/*显示绑定 call apply bind*/
{
    function foo() {
        console.log( this.a );
    }
    var obj = {
        a:2
    };
    var bar = function() {
        foo.call( obj );
    };
    bar(); // 2
    setTimeout( bar, 100 ); // 2
    bar.call( window ); // 2 硬绑定的bar 不可能再修改它的this
}
/*new绑定*/
{
    function foo(a) {
        this.a = a;
    }
    var bar = new foo(2);
    console.log( bar.a ); // 2
}

{
    function foo(something) {
        this.a = something;
    }
    var obj1 = {};
    var bar = foo.bind( obj1 );
    bar( 2 );
    console.log( obj1.a ); // 2
    var baz = new bar(3);
    console.log( obj1.a ); // 2
    console.log( baz.a ); // 3
}


