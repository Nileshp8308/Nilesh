function xyz(){
    let a=['alto','swift','harrier','safari','baleno'];
    for(let i=0;i<a.length;i++){
        if(a[i]=='harrier'){
            continue;
        }
        console.log(a[i]);
    }
}

let a=['alto','swift','harrier','safari','baleno'];
for(let i=0;i<a.length;i++){
    if(a[i]=='safari'){
        break;
    }
    console.log(a[i]);
}