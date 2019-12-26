let arrs = [1,2,3,4];
let res = [];

pailie([],arrs);
console.log(res);//排列结果

function pailie(val,arr) {
    arr.forEach(item=>{
        let valcopy = val.slice();
        valcopy.push(item);
        if(valcopy.length == arrs.length){
            res.push(valcopy)
        }else{
            let arrcopy = [];
            arrs.map(x=> {
                if(!valcopy.includes(x)){
                    arrcopy.push(x);
                }
            });
            pailie(valcopy,arrcopy)
        }
    })
}

let result = [];
res.forEach((item,index)=>{
    let tag = true;
    item.forEach((x,i)=>{
        if(x>item[i+1]){
            tag = false
        }
    });
    if(tag){
        result.push(item)
    }

});
console.log(result);//组合结果
