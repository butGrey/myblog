{
    //数组去重
    let arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];

    //方法一
    function unique (arr) {
        return Array.from(new Set(arr))
    }
    //console.log(unique(arr));
    
    //方法二
    let a = [...new Set(arr)] ;
    //console.log(a);
}
{
    //数组扁平化去重排序
    let arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
    let result = [...new Set(arr.toString().split(',').sort((a,b)=>a-b))];
}
{
    //深度不确定树形结构遍历---设置所有包含str字符串的节点tag为true，其中,如果某叶子节点包含str，则这条路径上的所有节点都设置为true
    let arrList = [
        {
            id: 11,
            lable: '深度不确定树形结构遍历',
            tag: false,
            children: [
                {
                    id: 111,
                    lable: '数组扁平化去重排序',
                    tag: false,
                    children: []
                },
                {
                    id: 112,
                    lable: '扁平',
                    tag: false,
                    children: [
                        {
                            id: 1121,
                            lable: '去重排序',
                            tag: false,
                            children: []
                        },
                        {
                            id: 1122,
                            lable: '数组',
                            tag: false,
                            children: [
                                {
                                    id: 11211,
                                    lable: '去重排序',
                                    tag: false,
                                    children: []
                                },
                                {
                                    id: 11222,
                                    lable: '数组扁平',
                                    tag: false,
                                    children: []
                                },
                            ]
                        },
                        {
                            id: 1123,
                            lable: '去重排序',
                            tag: false,
                            children: []
                        },
                    ]
                },
                {
                    id: 113,
                    lable: '数组扁平',
                    tag: false,
                    children: []
                },
            ]
        },
        {
            id: 22,
            lable: '数组扁平化',
            tag: false,
            children: [
                {
                    id: 221,
                    lable: '去重排序',
                    tag: false,
                    children: []
                },
                {
                    id: 222,
                    lable: '数组扁平化排序',
                    tag: false,
                    children: []
                },]
        },
        {
            id: 333,
            lable: '数组去重排序',
            tag: false,
            children: []
        }
    ];
    //console.log(search(arrList,'数组',[]));

    function search(arr,str,indexList){
        let indexArr = '';
        for(let i = 0;i<arr.length;i++){     
            let valArr = Object.values(arr[i]);   
            if(valArr.toString().includes(str)){     
                if(indexList.length==0){                    
                    arrList[0].tag = true;
                }else{
                    indexArr = 'arrList['+indexList[0]+']';   
                    eval(indexArr).tag = true;
                    for (let x=1;x<indexList.length;x++){
                        indexArr = indexArr + '.children['+indexList[x]+']';
                        eval(indexArr).tag = true;
                    }
                    indexArr = indexArr+'.children['+i+']';
                    eval(indexArr).tag = true;
                }               
            }
            if(arr[i].children&&arr[i].children.length){
                indexList.push(i);
                search(arr[i].children,str,indexList);
            }else{
                if(i == arr.length-1){
                    indexList.pop();
                }
            }
        }
    }
}
