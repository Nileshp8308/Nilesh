let a='nileshpatil';
console.log(a.length);
let b=a.slice(2,5);//slice wi positive values 
console.log(b);
let c=a.slice(-5,-2); //slice with negative value
console.log(c);

//substring
let e='shubham patil';
let d=e.substring(1,6);
console.log(d);
let f=e.substring(-5,4);
console.log(f);
let g=e.substring(5,-2);
console.log(g)

//touppercase and tolowercase
let h='NILESHPATIL';
console.log(h.toLowerCase());
let uppercase='nileshpatil';
console.log(uppercase.toUpperCase());

//replace

let name1='nilesh,shubham,sonu,sunny';
let name2=name1.replace('shubham',20);
console.log(name2);

//charAt and normal method to fetch the value by its index

let char='shubham patil';
console.log(char[5]);
console.log(char.charAt(10));

//indexof and lastindexof

let index='nileshnilu';
console.log(index.indexOf('l',4));
console.log(index.lastIndexOf('l'));

//search

console.log(index.search('h'));

//split

let n='nilesh patil';
let m=n.split(' ');
console.log(m);
console.log(n.split('l'));





