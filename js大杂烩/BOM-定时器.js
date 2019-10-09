/*
* 定时器的参数
* 1.回调函数
* 2.延时时间
* 3.第三个参数之后的是传入回调函数的一些参数
* */
/*注：
setTimeout有最小时间间隔限制，HTML5标准为4ms，小于4ms按照4ms处理，但是每个浏览器实现的最小间隔都不同
因为JS引擎只有一个线程，所以它将会强制异步事件排队执行
如果setInterval的回调执行时间长于指定的延迟，setInterval将无间隔的一个接一个执行
this的指向问题可以通过bind函数、定义变量、箭头函数的方式来解决
*/
//问题一：下面代码输出什么？如何改变输出？
for (var i = 0; i < 5; i++) {
    setTimeout(function (i) {
        console.log(i);
    }, 0);
}//5 5 5 5 5

//扩展方法
for (var i = 0; i < 5; i++) {
    setTimeout(function (i) {
        console.log(i);
    }, 0, i);
}//0 1 2 3 4

//方法一：ES6 let关键字，创建块作用域
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000 * i)
}
//以上代码实际上是这样的
for (var i = 0; i < 5; i++) {
    let j = i;  //闭包的块作用域
    setTimeout(function() {
        console.log(j);
    }, 1000 * j);
}

//方法二：IIFE
for (var i = 0; i < 5; i++) {
    (function iife(j) {     //闭包的函数作用域
        setTimeout(function() {
            console.log(j);
        }, 1000 * i);   //这里将i换为j, 可以证明以上的想法。
    })(i);
}
//实际上，函数参数，就相当于函数内部定义的局部变量，因此下面的写法是相同的。
for (var i = 0; i < 5; i++) {
    (function iife() {
        var j = i;
        setTimeout(function() {
            console.log(j);
        }, 1000 * i);   //如果这里将i换为j, 可以证明以上的想法。
    })();
}

//问题三： 如果原问题改为如下，会输出什么？
for (var i = 0; i < 5; i++) {
    setTimeout((function() {
        console.log(i);
    })(), 1000 * i);
}
//回答：立即输出0, 1, 2, 3, 4。因为是setTimeout的第一个参数是函数或者字符串，而此时函数又立即执行了。因此，此时的定时器无效了，直接输出0, 1, 2, 3, 4。上面的代码等同于如下
for (var i = 0; i < 5; i++) {
    (function() {
        console.log(i); //0, 1, 2, 3, 4
    })();
}


/*由setTimeout()调用的代码运行在与所在函数完全分离的执行环境上.
这会导致这些代码中包含的this关键字会指向window (或全局)对象，
window对象中并不存在shout方法，所以就会报错*/
var obj = {
    msg: 'obj',
    shout: function () {
        console.log(this.msg);
    },
    waitAndShout: function() {
        var self = this; // 这里将this赋给一个变量
        setTimeout(function () {
            self.shout();
        }, 0);
    }
};
obj.waitAndShout();

//问题四：以下代码输出什么？
console.log(1);

setTimeout(function() {
    console.log(2);
}, 0);

$.ajax({
    url: "../index.php",
    data: 'GET',
    success: function(data) {
        console.log(data);
    },
});

new Promise(function(resolve, reject) {
    console.log(4);
    resolve();
}).then(function() {
    console.log(5);
}).then(function() {
    console.log(6);
});

console.log(7);

//问题五：以下代码输出什么
for ( var i=0; i<4; i++) {
    var tc = setTimeout(function(i){
        console.log(i);
        clearTimeout(tc);//同没传入i时每次输出最后一个i一样，每次输出最后一个tc
    },10,i)
}//0,1,2

for(var i=0;i<4;i++){
    var tc = setInterval(function(i,tc){
        console.log(i);
        clearInterval(tc)
    },10,i,tc)
}//0,1,2,3,3,3.......

for ( var i=0; i<4; i++) {
    var tc = setTimeout(function(i,tc){
        console.log(i);
        clearTimeout(tc)
    },10,i,tc)
}//0,1,2,3
