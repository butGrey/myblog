let arr = [33,11,66,15,65,20,12,43,15,65,20,99];
//let arr = [6,1,2, 7,9,3,4,5, 10,8];
//let arr = [1,2,6,7,9,3,4,5,10,8];
kuaisu(0,1,arr.length-1);
console.log(arr);

/*冒泡排序：从头挨个相邻比较，最小的一层层冒泡冒上去*/
function maopao(arr,index) {
    for (let i = 0;i<arr.length-1-index;i++){
        if(arr[i]<arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    if(index < arr.length-1){
        maopao(arr,index+1)
    }
}

/*选择排序：选出最小的往前面放*/
function xuanze(arr,index) {
    let tag = arr[index];
    let min = {
        val: arr[index],
        index: index
    };
    for(let i = index;i<arr.length;i++){
        if(arr[i] < min.val){
            min.val = arr[i];
            min.index = i;
        }
    }
    arr[index] = min.val;
    arr[min.index] = tag;
    if(index < arr.length-1){
        xuanze(arr,index+1)
    }
}

/*插入排序：从头一个个排序*/
 function charu(arr) {
    for(let i = 1;i<arr.length;i++){
        let index = i;
        for(let j=i-1;j>-1;j--){
            if(arr[j]>arr[index]){
                let temp = arr[index];
                arr[index] = arr[j];
                arr[j] = temp;
                index = index-1;
            }else{
                break
            }
        }
    }
}

/*归并排序：分而治之*/
function guibing(arr){
    let res = fen(arr);
    console.log(res);
}
function fen(arr) {
    if(arr.length==1){
        return arr
    }
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid,arr.length);
    return merge(fen(left),fen(right))
}
function merge(left,right) {
    let result = [];
    let il = 0;
    let ir = 0;
    while (il<left.length&&ir<right.length){
        if(left[il]<right[ir]){
            result.push(left[il]);
            il++;
        }else{
            result.push(right[ir]);
            ir++
        }
    }
    while (il<left.length){
        result.push(left[il]);
        il++;
    }
    while (ir<right.length){
        result.push(right[ir]);
        ir++;
    }
    return result;
}

/*快速排序：随便主元素，边缘左右指针，找左>主>右，调换，循环，直到左右指针相遇，和主元素或主元素前一个交换，重新划分；*/
function kuaisu(mark,left,right) {
    if(left>right){ //过滤
        return;
    }

    let l = left,   //初始左右指针保留，用来划分
        r = right;

    while (l!=r){   //左右指针指向的值，满足条件交换位置
        while (arr[l]<arr[mark]&&l<r){
            l++;
        }
        while (arr[r]>arr[mark]&&l<r){
            r--;
        }
        if(arr[l]>arr[r]){
            let tag = arr[l];
            arr[l] = arr[r];
            arr[r] = tag;
        }
    }

    let x = arr[l]<arr[mark]?l:l-1; //i==r，基数小于指向数，基数与指向数前一个互换，否则与指向数换

    if(x!=mark){  //过滤掉换的数就是基数本身
        let tag = arr[x];
        arr[x] = arr[mark];
        arr[mark] = tag;
    }

    kuaisu(left-1,left,x-1);
    kuaisu(x+1,x+2,right);
}
