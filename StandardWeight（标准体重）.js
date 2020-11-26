// 性别 默认值 男 身高默认值是 170  体重默认值 60
// 计算 标准体重
// 男性 (身高cm - 80)*0.7
// 女性 (身高cm - 70)*0.6
// 判断 输入的 体重,是否在 标准体重范围内
// 标准体重范围 : 标准体重 + / - 10%   1.1   0.9
var sex = window.prompt('请输入年份');
var height = window.prompt('请输入月份')*1 || 170;
var weight = window.prompt('请输入天数')*1 || 60;
function staWeight(sex , height , weight){
    if((sex === '男' || sex === '女') && (height > 0 || height < 300)&&( weight > 0 || weight < 650)){
            var oSta = sex === '男' ? parseInt((height - 80)*0.7) :  parseInt((height - 70)*0.6) ;
            if(oSta > oSta*0.9 || oSta < oSta*1.1){
                console.log(oSta);
                return '您的体重为标准体重';
            }else if(oSta < oSta*0.9){
                return '您的体重太轻了';
            }else if(oSta > oSta*1.1){
                return '您的体重太重了';
            }
    }else{
        window.alert('您输入的性别/身高/体重有误');
        return ;
    }
}