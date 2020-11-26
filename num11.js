//最小公倍数
function Gbs(min,max){
    // if( min > max ){
    //     var num ;
    //     num = max;
    //     max = min;
    //     min = num;
    // }
    var min = Math.min(min,max);
    var max = Math.max(min,max);
    for(var i = max ;  i <= min*max ; i += max){
        if(i % min == 0 && i % max == 0){
            return i;
        }
    }
}

//最大公约数
function Gys(min,max){
    // if( min > max ){
    //     var num ;
    //     num = max ;
    //     max = min ;
    //     min = num ;
    // }
    var min = Math.min(min,max);
    var max = Math.max(min,max);
    for(var j = min ; j >= 1; j-- ){
        if(min % j == 0 && max % j == 0){
            // console.log(j);
            return j;
        }
    }
}