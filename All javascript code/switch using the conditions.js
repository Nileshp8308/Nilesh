function xyz(){
    let a=parseInt(prompt('Enter value of a'))
    let b=parseInt(prompt('Enter value of b'))
    let result;
    switch(true){
        case (a>b):
        result=a+b;
        console.log(result);
        break;
        default:
            console.log('A is not greater than B')
    }
}