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