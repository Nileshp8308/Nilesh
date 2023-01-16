// 1. Write a JS code to print numbers from 1 to 10
function myfunction(){
let a=[]
for (let i=1;i<=10;i++){
    a.push(i)
    if(i==10){
        console.log(a)
    }
}
}

// 3. Write a JS code to print Even numbers in given array
let arr = [13,23,12,45,22,48,66,100]
let d=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        d.push(arr[i])
    }
}
console.log(d);
let newarray=[];
let array = [[0,1,1],[0,1,0],[1,0,0]];


// seperate the zeroes from the  given array
    function nilesh(){

for(let i=0;i<array.length;i++){
    if(array[0][i]==0){
        newarray.push(array[0][i])
    }
    if(array[1][i]==0){
        newarray.push(array[1][i])
    }
    if(array[2][i]==0){
        newarray.push(array[2][i])
    }
}
    }
