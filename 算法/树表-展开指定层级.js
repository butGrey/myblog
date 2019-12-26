var somedata = [
    {
        id: 11,
        lable: 'hahaha',
        children: [
            {
                id: 111,
                lable: 'hahaha',
                children: []
            },
            {
                id: 112,
                lable: 'hahaha',
                children: [
                    {
                        id: 1121,
                        lable: 'hahaha',
                        children: []
                    },
                    {
                        id: 1122,
                        lable: 'hahaha',
                        children: []
                    },
                ]
            },
            {
                id: 113,
                lable: 'hahaha',
                children: []
            },
        ]
    },
    {
        id: 22,
        lable: 'hahaha',
        children: [
            {
                id: 221,
                lable: 'hahaha',
                children: []
            },
            {
                id: 222,
                lable: 'hahaha',
                children: []
            },]
    },
    {
        id: 333,
        lable: 'hahaha',
        children: []
    }
];
var level = 2;

var datacopy = [];
var k = 0;
//模糊匹配
open(somedata,level);
function open(sourceData, level) {
    if(level == 0){
        return
    }
    for(let i = 0;i < sourceData.length;i++){
        if(sourceData[i].children.length){
            console.log('展开'+sourceData[i].id+'序号'+i);
            open(sourceData[i].children,level-1)
        }
    }
}
