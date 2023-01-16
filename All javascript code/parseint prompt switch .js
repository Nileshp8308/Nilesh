function xyz(){
    let a=parseInt(prompt('Enter value of a'));
    let b=parseInt(prompt('Enter value of b'));
    let operator=prompt( 'operator');
    let result;
    switch (operator){
        case '+':
        result=a+b;
        console.log(result);
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
        result=a/b;
        console.log(result);
        break;
        case '+=':
        result=a+=b;
        console.log(result);
        break;
        default:
        console.log('No match found')
    }
}