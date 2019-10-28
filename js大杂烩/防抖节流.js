/*
函数节流防抖：某些代码不可以在没有间断的情况下连续重复执行，
防抖：就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间
节流：就是指连续触发事件但是在 n 秒中只执行一次函数，所以节流会稀释函数的执行频率。*/
{
    //每次触发事件时都取消之前的延时调用方法
    function debounce(func, wait) {
        let timeout;// 创建一个标记用来存放定时器的返回值
        return function () {
            let context = this;
            let args = arguments;
            // 每当用户输入的时候把前一个 setTimeout clear 掉
            if (timeout) clearTimeout(timeout);
            // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
            timeout = setTimeout(() => {
                func.apply(context, args)
            }, wait);
        }
    }
    function debounce(func, time) {
        let timer = null;
        return (...arg) => {
            if(timer) clearTimeout(timer);
            timer = setTimeout(()=> {
                func.apply(this, arg)
            }, time);
        }
    }
    let interv = setInterval(function () {
        console.log('1s过去')
    },1000)
    debounce(add,5000)(0,1);
    setTimeout(function () {
        debounce(add,5000)(1,2);
    },2000)
    setTimeout(function () {
        debounce(add,5000)(1,2);
        clearInterval(interv)
    },6000)
}

{
    let activeTime = 0;
    function throttle(func, wait) {
        let activeTime = 0;
        return function() {
            let now = Date.now();
            let context = this;
            let args = arguments;
            if (now - activeTime > wait) {
                func.apply(context, args);
                activeTime = now;
            }
        }
    }
    let activeTime = 0;
    function throttle(func, time){
        return (...arg) => {
            const current = Date.now();
            if(current - activeTime > time) {
                func.apply(this, arg);
                activeTime = Date.now();
            }
        }
    }
    let interv = setInterval(function () {
        console.log('1s过去')
    },1000)
    debounce(add,5000)(0,1);
    setTimeout(function () {
        debounce(add,5000)(1,2);
    },2000)
    setTimeout(function () {
        debounce(add,5000)(1,2);
        clearInterval(interv)
    },6000)
}


function add(a,b) {
    console.log(a+b)
}
/*防抖debounce: n秒内函数只能触发一次，如果n秒内触发了，则重新计时*/
function debounce(fn,time) {
    let timeout;
    return function (...arg) {
        let context = this;
        if(timeout){
            clearTimeout(timeout)
        }
        timeout = setTimeout(function () {
            fn.apply(context,...arg)
        },time)
    }
}
debounce(add(1,2),3000);
