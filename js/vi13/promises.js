console.log("This is Promises");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a<0.1){
        reject("The Number is Not Found")
    }
    else{
        setTimeout(() => {
            console.log("The Number is Cheked")
            resolve("Number is Right")
        }, 2000);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a<0.1){
        reject("The Number is Not Found")
    }
    else{
        setTimeout(() => {
            console.log("The Number is Cheked2")
            resolve("Number is Right2")
        }, 1000);
    }
})

// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })
//api promises = all, allsetteld, race,  any, resolve, reject
let p3 = Promise.reject ([prom1, prom2])
p3.then((a)=>{
console.log(a)
}).catch((err)=>{
    console.log(err)
})