    /*
    * 类似一个栈
    * */
    // let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    let arr = [13,12,11,10,9,8,7,6,5,4,3,2,1];
    let des = new Array(arr.length);
    let k = 1;
    function f(arr,i) {
        let is = i-Math.pow(2,k-1);
        while (i>=0){
            des[i] = arr.shift();
            i = i-Math.pow(2,k);
        }
        k++;
        if(arr.length){
            f(arr,is)
        }
    }
    f(arr,12);
    console.log(des);
