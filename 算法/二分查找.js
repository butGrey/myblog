/*查找旋转数组的最小值，如1234的旋转数组2341 3412 4123
* 查找：顺序查找， 二分查找
* */
let arr = [1,2,3,4,5,6];
let res;
midDivide(arr);
console.log(res);
function midDivide(arr) {
    let mid  = Math.floor(arr.length/2);
    if (arr[mid]<arr[mid-1]&&arr[mid]<arr[mid+1]){
        res = arr[mid]
    } else if(arr[mid]>arr[mid-1]&&arr[mid]>arr[mid+1]){
        res = arr[mid-1]<arr[mid+1]?arr[mid-1]:arr[mid+1];
    } else{
        if(arr[mid-1]<arr[mid+1]&&arr[mid-1]<arr[arr.length-1]){
            arr = arr.splice(0,mid);
        }else{
            arr = arr.splice(mid+1,arr.length);
        }
        if(arr.length==1){
            res = arr[0];
        }else if(arr.length==2){
            res = arr[0]<arr[1]?arr[0]:arr[1];
        }else {
            midDivide(arr)
        }
    }
}
