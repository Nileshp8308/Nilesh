let a=[
    {firstname:"nilesh",Lastname:"patil"},
    {firstname:"Vaishnavi",Lastname:"patil"}
]
let b=a.filter((item)=>{
    if(item.firstname=="Vaishnavi"){
        return item.firstname
    }
})
console.log(b)

