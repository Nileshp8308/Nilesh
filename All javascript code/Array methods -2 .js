function xyz(){
let a=['nilesh','shubham','sonu','sunny'];
let b=['prachi','vaishnavi','sai','om',10];
let d=[10,20,30,40,50,60,70,];
a.unshift('Golu');
console.log(a);
console.log(a.length);
console.log(b[b.length-1]);
let c=a.concat(b);
console.log(c);
let e=a.concat(b,d);
console.log(e);
let f=[10,20,40,60,70,];
console.log(f.slice(1,4)); //positive values
console.log(f.slice(-4,-1)) //Negative values
}