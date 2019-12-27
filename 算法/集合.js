//数据结构-集合 dsset
//使用es6定义集合类

class Dsset {
    constructor(){
    }
    has(val){  //集合中存在某子集
        return this.hasOwnProperty(val);
    }
    add(val){  //添加元素
        if(!this.has(val)){
            this[val] = val;
        }
    }
    remove(val){  //删除元素
        if(this.has(val)){
            delete this[val];
        }
    }
    clear(){ //清空所有元素
        for(let key in this){
            delete this[key];
        }
    }
    size(){ //属性个数
        return Object.keys(this).length;
    }
    values(){   //属性数组
        return Object.keys(this);
    }
    union(set){    //并集
        let result = new Dsset();
        for(let key in this){
            result.add(this[key]);
        }
        for(let key in set){
            result.add(set[key]);
        }
        return result;
    }
    intersection(set){  //交集
        let result = new Dsset();
        for(let key in this){
            if(set.has(key)){
                result.add(key)
            }
        }
        return result;
    }
    difference(set){   //差集
        let result = new Dsset();
        for(let key in this){
            if(!set.has(key)){
                result.add(key)
            }
        }
        return result;
    }
    subset(set){   //子集
        if(set.difference(this).size()){
            return false;
        }else{
            return true;
        }
    }
}

let set01 = new Dsset();
set01.add('a');
set01.add('b');
set01.add('c');
/*组合*/
let res = [];
zuhe(set01);
function zuhe(set){
    for(let item of res){
        if(item.size()==set.size()&&!item.difference(set).size()){
            return
        }
    }
    res.push(set);
    set.values().forEach(item=>{
        let s = new Dsset();
        s.add(item);
        zuhe(set.difference(s));
    })
}
console.log(res);
