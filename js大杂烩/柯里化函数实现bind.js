/*函数柯里化*/

//基本思想 当函数被调用时，返回的函数还需要设置一些传入的参数
function sum(a, b) {
    return a+b
}
/*{
    function fun(c) {
        return sum(2,c)
    }
    console.log(fun(4));
}*/

//封装柯里化函数
/*
{
    function curry(fn){
        //将具有length属性的对象(key值为数字)转成数组。
        //改变数组的slice方法的作用域，在特定作用域中去调用slice方法，call（）方法的第二个参数表示传递给slice的参数即截取数组的起始位置。
        //ES6的rest参数...数组可以得到arguments中的参数列表
        var args = Array.prototype.slice.call(arguments, 1);
        return function(){
            var innerArgs = Array.prototype.slice.call(arguments);
            var finalArgs = args.concat(innerArgs);
            return fn.apply(null, finalArgs);
        };
    }
    let curriedAdd = curry(sum, 5);
    console.log(curriedAdd(6));
}
*/

/*
{
    function curry(fn,...outarg){
        return function(...inarg){
            let args = outarg.concat(inarg);
            return fn(...args)
        };
    }
    let curriedAdd = curry(sum, 5);
    console.log(curriedAdd(6));
}
*/
/*
{
    function bind(fn,context){
        //将具有length属性的对象(key值为数字)转成数组。
        //改变数组的slice方法的作用域，在特定作用域中去调用slice方法，call（）方法的第二个参数表示传递给slice的参数即截取数组的起始位置。
        //ES6的rest参数...数组可以得到arguments中的参数列表
        var args = Array.prototype.slice.call(arguments, 2);
        console.log(args);
        return function(){
            var innerArgs = Array.prototype.slice.call(arguments);
            var finalArgs = args.concat(innerArgs);
            return fn.apply(context, finalArgs);
        };
    }
    let curriedAdd = bind(sum, 5);
    console.log(curriedAdd(6));
}
*/

{
    Function.prototype.bind = function (context) {
        //0.保存this
        let self = this;
        //1.错误处理
        if(typeof this!=="function"){
            throw new Error(this+'is not a function')
        }
        //2.参数列表
        let argOut = Array.prototype.slice.call(arguments,2);
        //3.返回函数this绑定
        let fn = function () {
            let argIn = Array.prototype.slice.call(arguments);
            let arg = argOut.concat(argOut);
            return self.apply(this instanceof self ? this : context, arg)
        };
        fn.prototype = Object.create(self.prototype);
        return fn;
    };
}

var a = 9;
var b = 10;

var test = {
    a : 1,
    b:2,
    fun: function () {
        console.log(this.a+this.b)
    }
}

var testcopy = {
    a: 5,
    b:6
};

var obj = test.fun.bind(testcopy);
obj();
