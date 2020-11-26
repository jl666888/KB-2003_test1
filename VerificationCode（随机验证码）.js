//获取随机验证码   6位
function verCode(){
    var res = '';
    var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(var i = 1; i <= 6 ; i++){
        var num = parseInt(Math.random()*str.length);
        res += str[num];
    }
    return res;
}