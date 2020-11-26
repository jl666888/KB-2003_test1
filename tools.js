//随机颜色rgb
function colRgb(){
    return `rgb(${parseInt(Math.random()*256)},${parseInt(Math.random()*256)},${parseInt(Math.random()*256)})`;
}

//随机颜色十六进制数
function colHexadecimal(){
    var str = '0123456789abcdef';
    var res ='#';
    for(var i = 1; i <= 6; i++){
        var num1 = parseInt(Math.random()*str.length);
        res += str[num1];
    }
    return res;
}
function colWord(){
    var wordArray = ['black','silver','gray','white','maroon','red','purple','fuchsia','green','lime','olive','yellow','navy','blue','teal','aqua','orange','aliceblue','antiquewhite','aquamarine','azure','beige','bisque','blanchedalmond','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','darkblue','darkcyan','darkgoldenrod','darkgray','darkgreen','darkgrey','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray','darkslategrey','darkturquoise','darkviolet','deeppink','deepskyblue','dimgray','dimgrey','dodgerblue','firebrick','floralwhite','forestgreen','gainsboro','ghostwhite','gold','goldenrod','greenyellow','grey','honeydew','hotpink','indianred','indigo','ivory','khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgray','lightgreen','lightgrey','lightpink','lightsalmon','lightseagreen',''];
    var num = parseInt(Math.random()*wordArray.length);
    // console.log(num);
    // console.log(wordArray[num]);
    return wordArray[num];
}

//最小公倍数
function Gbs(min,max){
    if( min > max ){
        var num ;
        num = max;
        max = min;
        min = num;
    }
    for(var i = max ;  i <= min*max ; i += max){
        if(i % min == 0 && i % max == 0){
            return i;
        }
    }
}

//最大公约数
function Gys(min,max){
    if( min > max ){
        var num ;
        num = max ;
        max = min ;
        min = num ;
    }
    for(var j = min ; j >= 1; j-- ){
        if(min % j == 0 && max % j == 0){
            // console.log(j);
            return j;
        }
    }
}

function Prime(num){
    if(num <= 0){
        window.alert('请输入0以上的正整数');
    }
    var bool = true;           
    for(var i = 2; i < num; i++){
        if(num % i == 0){
            bool = false;
        }
       
    }
    if(bool == true || num == 1 || num == 2){
        return `${num}是质数`;
    }else{
        return `${num}不是质数，是合数`;
    }
}

//获取随机验证码   6位
function verCode(){
    var res = '';
    var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(var i = 1; i <= 6 ; i++){       //通过控制循环次数，来得到验证码的每一位
        var num = parseInt(Math.random()*str.length);   // 获取随机数作为索引下标
        res += str[num];            //将每次得到的数值进行拼接
    }
    return res;
}

//输入一个年份判断是否为闰年
function leapYear(year){
    if(year <= 0){      //判断输入的年份是否正确
        window.alert('请输入0以上的正整数');
    }
    if( (year % 4 == 0) && (year % 100 !== 0) || (year % 400 === 0) ){       //if判断是否为闰年
        return `${year}是闰年`;
    }else{
        return `${year}不是闰年，是平年`;
    }
}
//关键词替换
function keyWord(str , word){
    var arr = str.split( word );
    res = '';
    for(var i = 1 ; i <= word.length; i++){
        res += "*";
    }
    var newStr = arr.join(res);
    return newStr;
}

//返回文件后缀名
function Suffix(str){
    return str.substring(str.lastIndexOf('.') + 1); //首先获取字符串中最后一个.的索引下标，然后从下一个索引开始截取至最后一个
}

//判断一个字符串是否为回文字符串（回文字符串正着念反着都一样）
//如果是就返回true ，如果不是就返回false
function pdStr(str1){
    var arr = str1.split('');
    arr.reverse();
    var newStr = arr.join("");
    if(newStr === str1 ){
        return true;
    }else{
        return false;
    }

}

//输入一个日期，判断为这一年的第一天
function addDay( year , month , day){
    var res = 0;
    var dayArr = [31 , 28 , 31 , 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 ,31 ];
    if( (year % 4 == 0) && (year % 100 !== 0) || (year % 400 === 0) ){
        dayArr[1] = 29;
    }
    for(var i = 0 ; i <= month - 2 ; i++){
        res += dayArr[i];
    }
    res += day;
    console.log(res);
    return `${year}年${month}月${day}号是这一年的第${res}天`;
}

//数组去重
function dupArr1(arr){
    var newArr = [];
    arr.forEach(function(val,index,arr){
        if(newArr.indexOf(arr[index]) == -1){
            newArr.push(arr[index]);
        }
    })
    return newArr;
}
//数组去重方法2
function dupArr2(arr){
    var arr1 = arr.sort();
    for(var i = 0 ;i <= arr1.length-1; i++){
        if(arr1[i] == arr1[i+1]){
            arr1.splice(i+1,1);
            i--;
        }
    }
    return arr1;
}
//数组去重方法3
function dupArr3(arr){
    for(var j = 0; j <= arr.length-1 ; j++){
        for(var i = j+1; i <=arr.length-1;i++){
            if(arr[j] === arr[i]){
                arr.splice(i,1);
                i--;
            }
        }
    }
    return arr;
}
//数组排序   冒泡排序
function BubbleSort(arr){
    for(var i = 0;i <= arr.length-2; i++){
        for(var j = 0; j <= arr.length -1 -i; j++){
            if(arr[j] > arr[j+1]){
                var tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}

//数组排序   选择排序
function SelectSort(arr){
    for(var i = 0 ; i <= arr.length-2;i++){
        var index = i;
        for(var j = i+1; j <= arr.length-1;j++){
            if(arr[index] > arr[j] ){
                index = j;
            }
        }
        if(i !== index ){
            var tmp = arr[index];
            arr[index] = arr[i];
            arr[i] = tmp;
        }
    }
    return arr;
}


//输出一个电子表
function Timewatch(){
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth()+1;
    var day = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
    var arr1 = ['日','一','二','三','四','五','六'];
    var week = `星期${arr1[time.getDay()]}`;
    var hours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    var min = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    var s = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
    return `今天是${year}年，${month}月，${day}日，${week}，${hours}:${min}:${s}`;
}

//倒计时
function CountDown(endTime){
    var now = new Date();
    var end = new Date(endTime);
    var time = parseInt( (end.getTime() - now.getTime())/1000);
    var day = parseInt(time/86400) < 10 ? '0' + parseInt(time/86400) : parseInt(time/86400);
    var hours = parseInt((time % 86400)/3600) < 10 ? '0' + parseInt((time % 86400)/3600) : parseInt((time % 86400)/3600);
    var min = parseInt( (time % 3600)/60 ) < 10 ? '0' + parseInt( (time % 3600)/60 ) : parseInt( (time % 3600)/60 );
    var s = ( time % 60 ) < 10 ? "0" + ( time % 60 ) :  time % 60 ;
    return `离${endTime}还有${day}天，${hours}小时，${min}分钟，${s}秒`;
    // return {day,hours,min,s};
}
//递归函数 ， 最大公约数
function GCD(num1,num2){
    var min = Math.min(num1,num2);
    var max = Math.max(num1,num2);
    if(max % min === 0){
        return min;
    }
    return GCD(min , (max % min));
}

//递归函数 ，斐波那契数列
function fArr(num){
    if(num === 1 || num === 2){
        return 1;
    }
    return fArr(num - 1) + fArr(num - 2);
}

//递归函数  ， 数字的累加效果
//执行过程
/* 第一次:
 add2(5)  判断是 false 执行 return add2(num-1) + num;  就是  return add2(4) + 5;  add2(5)  的结果是 add2(4)+5
     第二次:
     add2(4)  判断是 false 执行 return add2(num-1) + num;  就是  return add2(3) + 4;   add3(4)  的结果是 add2(3)+4
          第三次
          add2(3)  判断是 false 执行 return add2(num-1) + num;  就是  return add2(2) + 3;   add3(3)  的结果是 add2(2)+3
               第四次
               add2(2)  判断是 false 执行 return add2(num-1) + num;  就是  return add2(1) + 2;   add3(2)  的结果是 add2(1)+2
                   第五次
                   add2(1)  判断是 true   执行 return  1  就是  add2(1)  的结果是 1
 */
function getAdd(num){  
    if( num === 1 ){
        return 1;
    }                            
    return getAdd(num - 1) + num;
}
//递归函数  ， 数字的累乘效果
function getRide(num){
    if(num === 1 ){
        return 1;
    }
    return getRide(num-1)*num;
}

// 删除class属性值中,指定的某个选择器

function myRemoveClass( element , clas){
    var classStr = element.className;
    var classArr = classStr.split(' ');
    for(var i = 0; i <= classArr.length-1 ;i++){
        if(clas === classArr[i]){
            classArr.splice(i , 1);
            i--;
        }
    }
    element.className = classArr.join(' ');
}

// 获取标签css样式的兼容语法函数
function myGetStyle(element , style){
    if(window.getComputedStyle){
        return window.getComputedStyle(element)[style];
    }else{
        return element.currentStyle[style];
    }
}
//获取地址栏数据信息
function getUrlStr(){
    var str = window.decodeURI( window.location.search ).substr( 1 );
    var obj = {};
    var Arr1 = str.split('&');
    Arr1.forEach(function(val){
        var newArr = val.split('=');
        obj[newArr[0]] = newArr[1];
    })
    return obj;
}

//事件的监听
function setListener(element , type , func){
    if(element.addEventListener){
        element.addEventListener(type , func);
    }else{
        element.attachEvent( 'on' + type , func );
    }
}

//运动函数
function move(ele , typeObj , fun){
    let IntypeObj = {};
    for(let v in typeObj){
        IntypeObj[v] = setInterval( ()=>{
            let start = v === 'opacity' ? myGetStyle( ele , v )*100 : parseInt( myGetStyle( ele , v ) );
            let end = v === 'opacity' ? typeObj[v]*100 : typeObj[v];
            let speed = ( end - start ) / 5;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            start += speed;
            ele.style[v] = v === 'opacity' ? start/100 : start + 'px';
            // console.log(start);
            if(start === end){
                clearInterval(IntypeObj[v]);
                delete(IntypeObj[v]);
                let arr = Object.keys(IntypeObj);
                if(arr.length === 0){
                    fun = typeof(fun) === 'function' ? fun() : '';
                }
            } 
         } ,30)
    } 

}

//获取背景图片大小background-size  
function fun1(ele){   
    let obj = {};
    let str = myGetStyle(ele , 'backgroundSize');
    let arr = str.split(' ');
    if(arr.length === 1){
        obj.width = parseInt(arr[0]);
        obj.height = parseInt(arr[0]);
    }else if(arr.length === 2){
        obj.width = parseInt(arr[0]);
        obj.height = parseInt(arr[1]);
    }
    return obj;
}

//轮播图面向对象
//左右标签点击事件a的name属性为left 和 right
//ol的li焦点切换属性为class="active";
//图片路径为当前文件夹,图片路径键名为path
class loop{
    constructor(element , imgArr){
        this.ele = element;
        this.imgArr = imgArr;
        this.oUl = this.ele.querySelector('ul');
        this.oOl = this.ele.querySelector('ol');
        this.olLis;
        this.index = 1;
        this.imgLength = this.imgArr.length;
        this.liWidth ;
        this.time;
        this.bool = true;

    }
    init(){
        this.setLi();
        this.autoLoop();
        this.change();
        this.mouseOutIn();
        this.mouseclick();
        this.hid();
    }

    setLi(){
        let ulLi = '';
        let olLi = '';
        this.imgArr.forEach( (v,k)=>{
            ulLi += k === 0 ? `<li class="active1"><img src="./images/${v.path}" ></li>` : `<li><img src="./images/${v.path}" ></li>`;
            olLi += k === 0 ? `<li class="active2" name="olli1" num="${k}"></li>` : `<li num="${k}" name="olli1"></li>`;
        })
        this.oUl.innerHTML = ulLi;
        this.oOl.innerHTML = olLi;

        let first = this.oUl.querySelectorAll('li')[0].cloneNode(true);
        let last = this.oUl.querySelectorAll('li')[this.imgArr.length-1].cloneNode(true);

        this.oUl.appendChild(first);
        this.oUl.insertBefore(last ,this.oUl.querySelectorAll('li')[0]);
        this.olLis = this.oOl.querySelectorAll('li');
        this.liWidth = first.offsetWidth;
        this.oUl.style.width = (this.imgLength + 2) * this.liWidth + 'px';
        this.oUl.style.left = -this.index * this.liWidth + 'px';

    }

    autoLoop(){
        this.time = setInterval( ()=>{
            this.index++;
            this.change();
            move(this.oUl,{left:-this.index*this.liWidth},()=>{
                this.stopLoop();
            });
        } , 3000 )
    }

    stopLoop(){
        if(this.index === this.imgLength + 1){
            this.index = 1;
        }
        if(this.index === 0){
            this.index = this.imgLength;
        }
        this.oUl.style.left = -this.index * this.liWidth + 'px';
        this.bool = true;
    }

    change(){
        this.olLis.forEach( (v)=>{
            myRemoveClass(v , 'active');
        } )
        if(this.index === 0){
            this.olLis[this.imgLength-1].className += ' active';
        }else if(this.index === this.imgLength + 1){
            this.olLis[0].className += ' active';
        }else{
            this.olLis[this.index - 1].className += ' active';
        }
    }

    mouseOutIn(){
        this.ele.addEventListener( 'mouseover' , ()=>{
            clearInterval(this.time);
        })
        this.ele.addEventListener( 'mouseout' , ()=>{
            this.autoLoop();
        } )
    }

    mouseclick(){
        this.ele.addEventListener( 'click' , e =>{
            e = e || window.event;
            if(e.target.getAttribute('name') === 'left'){
                if(!this.bool)return;
                this.bool = false;
                this.index--;
                this.change();
                move(this.oUl,{left:-this.index*this.liWidth},this.stopLoop.bind(this));
            }
            if(e.target.getAttribute('name') === 'right'){
                if(!this.bool)return;
                this.bool = false;
                this.index++;
                this.change();
                move(this.oUl,{left:-this.index*this.liWidth},this.stopLoop.bind(this));
            }
            if(e.target.getAttribute('name') === 'olli1'){
                if(!this.bool)return;
                this.bool = false;
                let num = e.target.getAttribute('num')*1;
                this.index = num + 1;
                this.change();
                move(this.oUl,{left:-this.index*this.liWidth},this.stopLoop.bind(this));   
            }
        } )
    }

    hid(){
        document.addEventListener('visibilitychange' , ()=>{
            if(document.visibilityState === 'hidden'){
                clearInterval(this.time);
            }else if(document.visibilityState === 'visible'){
                this.autoLoop();
            }
        })
    }

}

//图片切换效果
//类型为点击事件
//html样式设置ul为名字，ol为图片
class Sw{
    constructor(element , imgArr){
        this.ele = element;
        this.arr = imgArr;
        this.oUl = this.ele.querySelector('ul');
        this.oOl = this.ele.querySelector('ol');
        this.ulLis;
        this.olLis;

    }
    init(){
        this.setLi();
        this.setActive();
    }

    setLi(){
        let ulstr = '';
        let olstr = '';
        this.arr.forEach((v,k)=>{
            ulstr += k === 0 ? `<li class="active1" name="ulli1" num="${k}">${v.name}</li>` : `<li name="ulli1" num="${k}">${v.name}</li>`;
            olstr += k === 0 ? `<li class="active2"><img src="./images/${v.path}"></li>` : `<li><img src="./images/${v.path}"></li>`;

        })  
        this.oUl.innerHTML = ulstr;
        this.oOl.innerHTML = olstr;
        this.ulLis = this.oUl.querySelectorAll('li');
        this.olLis = this.oOl.querySelectorAll('li');
    }
    setActive(){
        this.ele.addEventListener( 'mouseenter' , e =>{
            e = e || window.event;
            if(e.target.getAttribute('name') === 'ulli1'){
                this.ulLis.forEach((v,k)=>{
                    myRemoveClass(v , 'active1');
                    myRemoveClass(this.olLis[k] , 'active2');
                })

                let index = e.target.getAttribute('num')*1;
                e.target.className += ' active1';
                this.olLis[index].className += ' active2';
                
            }
        } )

    }


}


//放大镜  面向对象
//图片路径为当前文件夹
//显示区域盒子class为list，遮盖层class为show
//ul>li 边框的设置为 class 为active 
//放大区域class为 falls

class magnifier{
    constructor(element , imgarr){
        this.ele = element;
        this.arr = imgarr;
        this.Img = this.ele.querySelector('img');
        this.falls = this.ele.querySelector('.falls');
        this.list = this.ele.querySelector('.list');
        this.oUl = this.ele.querySelector('ul');
        this.show = this.ele.querySelector('.show');
        this.ulLis ;


    }
    init(){
        this.setHtml();
        this.Mouse();
        this.setList();
        this.move();
    }
    setHtml(){
        this.Img.src = `./images/${this.arr[0].big}`;
        this.falls.backgroundImage = `url(./image/${this.arr[0].big})`;
        let str = '';
        this.arr.forEach( (v,k)=>{
            str += k === 0 ? `<li  class="active"><img num="${k}" src="./images/${v.small}"></li>` : `<li><img num="${k}" src="./images/${v.small}"></li>`;

        } )
        this.oUl.innerHTML = str;
        this.ulLis = this.oUl.querySelectorAll('li');

    }

    Mouse(){
        this.list.addEventListener( 'mouseenter' , ()=>{
            this.show.style.display = 'block';
            this.falls.style.display = 'block';
        } )
        this.list.addEventListener( 'mouseleave' , ()=>{
            this.show.style.display = 'none';
            this.falls.style.display  = 'none';
        })
    }

    setList(){
        this.oUl.addEventListener('click' , e=>{
            e = e || window.event;
            if(e.target.tagName === 'IMG'){
                this.ulLis.forEach( (v,k)=>{
                    myRemoveClass( v , 'active');
                } )
                let index = e.target.getAttribute('num');
                e.target.parentNode.className += ' active';
                this.Img.src = `./images/${this.arr[index].big}`;
                this.falls.style.backgroundImage = `url(./images/${this.arr[index].big})`;
            }
        })
    }

    move(){
        // fun1
        let BoxMarginLeft = parseInt( myGetStyle(this.ele , 'marginLeft'));
        let BoxMarginTop = parseInt ( myGetStyle(this.ele , 'marginTop'));
        // console.log(BoxMarginLeft, BoxMarginTop);
        let listWidth = this.list.clientWidth;
        let listHeight = this.list.clientHeight;
        let listBorderLeft = this.list.clientLeft;
        let listBorderTop = this.list.clientTop;
        let showWidth = parseInt(myGetStyle(this.show , 'width'));
        let showHeight = parseInt( myGetStyle(this.show , 'height'));
        // console.log(listBorderLeft , listBorderTop);
        // console.log(showWidth,showHeight)

        this.list.addEventListener( 'mousemove' ,e =>{
            e = e || window.event;
            let x = e.pageX - BoxMarginLeft - listBorderLeft - showWidth/2;
            let y = e.pageY - BoxMarginTop - listBorderTop - showHeight/2;
            if(x < 0){
                x = 0;
            }
            if( y < 0){
                y = 0;
            }
            if(x > listWidth - showWidth){
                x = listWidth - showWidth;
            }
            if(y > listHeight - showHeight){
                y = listHeight - showHeight;
            }

            /*
                show/list = falls / x
            */

            this.show.style.left = x + 'px';
            this.show.style.top = y + 'px';
            let fall = fun1(this.falls);
            // let fallsHeight = fun1(this.falls).height;
            // console.log(fallsWidth , fallsHeight);
            let xx = -fall.width * x /listWidth;
            let yy = -fall.height * y / listHeight;
            this.falls.style.backgroundPosition = `${xx}px ${yy}px`;
        } )

    }
}