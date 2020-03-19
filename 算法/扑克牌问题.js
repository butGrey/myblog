    /*
    * 类似一个栈
    * */
    // let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    let arr = [13,12,11,10,9,8,7,6,5,4,3,2,1];
    let des = new Array(13);
    let k = 1;
    function f(arr,i) {
        let is = i;
        let j = 0;
        while (i>=0){
            des[i] = arr[j];
            i = i-Math.pow(2,k);
            j++;
        }
        k++;
        arr.splice(0,j);
        if(arr.length){
            f(arr,is-Math.pow(2,k-2))
        }
    }
    f(arr,12);
    console.log(des);
