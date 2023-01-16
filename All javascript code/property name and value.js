function xyz(){
    let car={
        name:'alto',
        company:'suzuki',
        model:2008,
    }
    for(let a in car){
        if(a=='company'){
            console.log(a,'',car[a]);
            console.log(`${a}`,`->${car[a]}`);
        }
    }
}