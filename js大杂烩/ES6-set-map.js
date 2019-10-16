/*
数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
WeakSet 的成员只能是对象，而不能是其他类型的值。
WeakSet 里面的引用，都不计入垃圾回收机制

Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
WeakMap与Map的区别有两点。
首先，WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。
其次，WeakMap的键名所指向的对象，不计入垃圾回收机制。
WeakMap 应用的典型场合就是 DOM 节点作为键名。
WeakMap 的另一个用处是部署私有属性。

Set
1.成员不能重复
2.只有健值，没有健名，有点类似数组。
3. 可以遍历，方法有add, delete,has
weakSet
1.成员都是对象
2.成员都是弱引用，随时可以消失。 可以用来保存DOM节点，不容易造成内存泄漏
3.不能遍历，方法有add, delete,has
Map
1.本质上是健值对的集合，类似集合
2.可以遍历，方法很多，可以干跟各种数据格式转换
weakMap
1.直接受对象作为健名（null除外），不接受其他类型的值作为健名
2.健名所指向的对象，不计入垃圾回收机制
3.不能遍历，方法同get,set,has,delete

*/


var student = {};
student.name = "xiaoming";
student.age = 12;
console.log(student);
// for(var key in student){
//     delete student[key];
// }

delete student['age'];
console.log(student);

let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
    console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
    console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
    console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}

// Set可以使用 map、filter 方法
let set = new Set([1, 2, 3])
set = new Set([...set].map(item => item * 2))
console.log([...set])	// [2, 4, 6]

set = new Set([...set].filter(item => (item >= 4)))
console.log([...set])	//[4, 6]

// Set 实现交集（Intersect）、并集（Union）、差集（Difference）
let set1 = new Set([1, 2, 3])
let set2 = new Set([4, 3, 2])

let intersect = new Set([...set1].filter(value => set2.has(value)))
let union = new Set([...set1, ...set2])
let difference = new Set([...set1].filter(value => !set2.has(value)))

console.log(intersect)	// Set {2, 3}
console.log(union)		// Set {1, 2, 3, 4}
console.log(difference)	// Set {1}
