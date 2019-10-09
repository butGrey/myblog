/*
window.location === document.location
window.location.href === window.location.toString()

href（返回整个URL地址，就是浏览器地址栏的内容）
返回值：http://www.san.com:8000/hello.js?t=3dg&id=utf-8#hello（随便编的一个地址）

protocol（URL协议）
返回值：http

host（URL主机部分）
返回值：www.san.com

hostname（URL主机部分加上端口号）
返回值：www.san.com:8000

pathname（URL路径部分，即文件地址）
返回值：/hello.js

hash（锚点）
返回值：#hello

search（URL参数部分）
返回值：?t=3dg&id=utf-8
* */
/*
* url编码和解码
* 在因特网上传送URL，只能采用ASCII字符集
* encodeURIComponent和decodeURIComponent
* 它用于对URL的组成部分进行个别编码，而不用于对整个URL进行编码。
* 因此，"; / ? : @ & = + $ , #"，这些在encodeURI()中不被编码的符号，在encodeURIComponent()中统统会被编码
1.encodeURIComponent()编码
var Jumpurl = encodeURIComponent(window.location.href);
var appid = 'wx3d15e2600fa7eee3';
window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='
+ appid + '&redirect_uri=' + Jumpurl + '&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
2.decodeURIComponent()解码
var a = '沉默的独白[[%F0%9F%98%81]][[%F0%9F%98%94]][[%F0%9F%98%8A]]';
var b = decodeURIComponent(a);
var c = b.replace(/[\[\]]/g,'');
console.log(b)
console.log(c)
/*
使用wndow.location.href得到地址通过split方法遍历得到
或者使用 window.location.search 获得"?"后面的字符串，
然后通过 split 方法结合循环遍历自由组织数据格式
使用decodeURIComponent解码()
*/

//问题：如何得到地址栏URL以及其各个参数
var url = '?name=12&age=23';
function urlQueryString(url) {
    var url = url.split('?')[1].split('&');
    console.log(url)
    var len = url.length;
    this.url = {};
    for(var i=0; i<len; i++) {
        var cell = url[i].split('=');
        var key = cell[0];
        console.log(cell[1]);
        var val = decodeURIComponent(cell[1]);
        console.log(val);
        this.url[''+key+''] = val;
    }
    return this.url;
}
console.log(urlQueryString(url));//返回的是一个对象{name:"12",age:""23}


/*
window.history是一个只读属性，用来获取History 对象的引用，History 对象提供了操作浏览器会话历史
window.history.back()后退
window.history.forward()前进
window.history.go(x)x为正数前进x个页面，负数后退x个页面
window.history.length查看长度属性的值来确定的历史堆栈中页面的数量
*/

/*navigator对象用来获取浏览器厂商和版本信息*/

/*window.screen用来获取窗口相关参数*/

/*alert() confirm() prompt()*/

/*onerror(描述错误的一条消息，错误代码所在的文档的URL的字符串，文档中发生错误的行数)
* 返回值 true false false代表处理了错误（火狐相反）
* */

/*window.open(url：路径,
target：窗口名,
features:以逗号分隔的列表，
包含大小和各种属性,replace:boolean，在第二个参数存在时生效，是否替换掉当前条目)
返回window对象
window.close()
*/

/*自己的窗口和窗体引用为window或self
parent引用包含它的窗口或窗体的window对象*/
