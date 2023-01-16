// to string number method
let a=1000;
let b=a.toString();
console.log(b)
document.write(b)
let c=(1000).toString()
document.write(c)
let d=(100+20).toString();
document.write(d)

// to exponential method

let n=9.558;
let m=n.toExponential();
console.log(m);
let o=n.toExponential(2);
console.log(o);
let p=n.toExponential(4);
console.log(p);
let q=n.toExponential(6);
console.log(q)

// to fixed method

let j=9.879;
let k=j.toFixed(0);
console.log(k)
let l=j.toFixed(2);
console.log(l);
let f=j.toFixed(6);
console.log(f);

// to Precision method

let v=9.879;
let w=v.toPrecision();
console.log(w);
let x=v.toPrecision(2);
console.log(x);
let y=v.toPrecision(6);
console.log(y);