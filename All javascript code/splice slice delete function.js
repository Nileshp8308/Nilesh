function xyz(){
    let a=[10,20,30,50,70,'patil']
    a.splice(-1,1,'nilu')
    console.log(a)
}
let b=['nilesh','shubham','priya','sonu'];

console.log(b.slice(1,3));//positive value
console.log(b.slice(-3,-1)) //negative value

let c=[20,30,70,50,55];
delete c[1];
console.log(c);
console.log(c[2]);

