let fruit={
    name:'apple',
    color:'red',
    price:100
}
let freshfruits={
    name:'apple1',
    size:'big',
}
let fruits1={...fruit,...freshfruits};
console.log(fruits1);