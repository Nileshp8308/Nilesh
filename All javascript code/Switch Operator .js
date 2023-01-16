function xyz(data){
    let a=20;
    let b=40;
    let result;
    switch(data){
        case '+':
        result=a+b;
        console.log(result)
        break;
        case '-':
        result=a-b;
        console.log(result);
        break;
        case '*':
        result=a*b;
        console.log(result);
        break;
        case '/':
        result=b/a;
        console.log(result);
        break;
    }
}