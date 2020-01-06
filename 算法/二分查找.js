/*查找旋转数组的最小值，如1234的旋转数组2341 3412 4123
* 查找：顺序查找， 二分查找
* */
let arr = [3,4,5,6,7,8,9,10,1,2];
let res;
res = midDivide(arr);
// f(arr);
console.log(res);
function f(arr) {
    let mid  = Math.floor(arr.length/2);
    if (arr[mid]<arr[mid-1]&&arr[mid]<arr[mid+1]){
        res = arr[mid];
    } else if(arr[mid]>arr[mid-1]&&arr[mid]>arr[mid+1]){
        res = arr[mid+1];
    } else{
        if(arr[mid-1]<arr[mid+1]&&arr[mid-1]<arr[arr.length-1]){
            arr = arr.slice(0,mid);
        }else{
            arr = arr.slice(mid+1,arr.length);
        }
        if(arr.length==1){
            res = arr[0];
        }else if(arr.length==2){
            res = arr[0]<arr[1]?arr[0]:arr[1];
        }else {
            f(arr)
        }
    }
}
//二分查找、快速排序均使用指针
function midDivide(arr) {
    let low = 0,
        height = arr.length-1;
    while (low <= height){
        let mid  = low + Math.floor((height-low)/2);
        if(mid == low || mid == height){                        //边界值
            return arr[mid]<arr[mid+1]?arr[mid]:arr[mid+1];
        }else if (arr[mid]<arr[mid-1]&&arr[mid]<arr[mid+1]){    //mid是最小的
            return arr[mid];
        } else if(arr[mid]>arr[mid-1]&&arr[mid]>arr[mid+1]){    //mid是最大的
            return arr[mid+1];
        } else{                                                 //mid不大不小
            if(arr[mid-1]<arr[mid+1]&&arr[mid-1]<arr[height]){
                height = mid-1;
            }else{
                low = mid+1;
            }
        }
    }
    return -1;
}
