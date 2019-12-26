var somedata = [
    {
        id: 1221,
        lable: 'hahaha',
        children: [
            {
                id: 112,
                lable: 'hahaha',
                children: []
            },
            {
                id: 112222,
                lable: 'hahaha',
                children: []
            },
        ]
    },
    {
        id: 1122,
        lable: 'hahaha',
        children: []
    },
    {
        id: 1133,
        lable: 'hahaha',
        children: []
    }
];
var somekey = ['id'];
var someword = '22';

var datacopy = [];
var k = 0;
//模糊匹配
search(somedata,somekey,someword);
function search(sourceData, searchFileds, searchWord) {
    for(let i = 0;i < sourceData.length;i++){
        for(let j = 0;j < searchFileds.length;j++) {
            if (sourceData[i][searchFileds[j]]&&sourceData[i][searchFileds[j]].toString().indexOf(searchWord) > -1) {
                datacopy[k] = sourceData[i];
                datacopy[k].children = [];
                k++;
                if(sourceData[i].children&&sourceData[i].children.length>0){
                    search(sourceData[i].children,searchFileds, searchWord)
                }
            }
        }
    }
}
console.log(datacopy)
