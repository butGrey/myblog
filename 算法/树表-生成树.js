let data = [{
    parentid: 0,
    id: 1,
    name: '张三',
    childrens: []
},{
    parentid: 1,
    id: 2,
    name: '张三子1',
    childrens: []
},{
    parentid: 1,
    id: 3,
    name: '张三子2',
    childrens: []
},{
    parentid: 2,
    id: 4,
    name: '张三子1的子1',
    childrens: []
},{
    parentid: 3,
    id: 5,
    name: '张三子2的子1',
    childrens: []
},{
    parentid: 1,
    id: 6,
    name: '张三子3',
    childrens: []
},{
    parentid: 4,
    id: 7,
    name: '张三子1的子1的子1',
    childrens: []
},{
    parentid: 4,
    id: 8,
    name: '张三子2的子1的子2',
    childrens: []
},{
    parentid: 0,
    id: 9,
    name: '李四',
    childrens: []
},{
    parentid: 9,
    id: 10,
    name: '李四子1',
    childrens: []
},{
    parentid: 12,
    id: 11,
    name: '李四子2的子1',
    childrens: []
},{
    parentid: 9,
    id: 12,
    name: '李四子2',
    childrens: []
},
]
//方法一递归
data.forEach((item)=>{
    if(item.parentid){
        data.forEach((items)=>{
            if(items.id==item.parentid){
                items.childrens.push(item)
            }
        })
    }
});
var datas = [];
data.forEach((item)=>{
    if(!item.parentid){
        datas.push(item)
    }
});
console.log('方法一datas：'+datas);
