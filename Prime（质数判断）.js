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