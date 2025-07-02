// //Callbacks
// console.log("Callbacks")
// //syncronous programin 1 2 3.. 
// console.log("one")
// console.log("two")
// console.log("three")

// //Asyncronous programing
// //1,2,3 api 4 5.. api was not loading but new fuction is ranning
// // function hello(){
// //     console.log("Hello...")
// // }
// // setTimeout(hello, 2000) //(name and delaytime)
// // //short hand

// console.log("one")
// console.log("Two")
// setTimeout(() => {
//     console.log("Hellow Timer")
// }, 2000);
// console.log("three")
// console.log("four")



// //Callbacks
// function sum(a, b){
//     console.log(a+b)
// }
// function calculater(a, b, sumCallback){
//     sumCallback(a, b)
// }
// calculater(1, 2, sum);

// const hello = () =>{
//     console.log("hellow")
// }
// setTimeout(hello, 2000); //callback fuction type



// //nesting  in if ke andar bhi condition rakhavi te nessting
// //ex 1
// let age = 19;
// if(age>=18){
//     if(age>=60){
//         console.log("Senior")
//     }
//     else{
//         console.log("Middle")
//     }

// }else{
//     console.log("child")
// }
// //ex-2  forloop in forloop this call nesting
// for (let i = 0; i < 5; i++) {
// let str = "";
// for (let j = 0; j < 5; j++) {
//     str= str + j  
// }
// console.log(i, str)    
// }

// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId)
//         resolve("success")
//         if(getNextData) {
//             getNextData()
//         }
//     }, 2000);
// }getNextData

//data1 //data2 ///data3

// //callbacks hell
//use .then and callback hall are same but .thne is easy to understand
// getData(1, () =>{
//     console.log("Getting Data 2....")
//     getData(2, () =>{
//         console.log("Getting Data 3....")
//         getData(3, ()=>{
//             console.log("Getting Data 4....")
//             getData(4)
//         })
//     })
// })

//calback hell soluction is promices
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId)
//             resolve("success")
//             // if(getNextData){
//             //     getNextData()
//             // }
//         }, 3000);
//     })
// }
//solv q- to promise chain
// console.log("Loading Data-1.....")
// getData(1).then((res) => {
//     //  console.log(res);
//     console.log("Loading Data-2......")
//     getData(2).then((res) => {
//         //   console.log(res)
//         console.log("Loading Data-3.........")
//         getData(3).then((res) => {
//             //   console.log(res)
//         })
//     })
// })
//
//shorthand
//use .then and callback hall are same but .then is easy to understand
// getData(1).then((res)=>{
//     return getData(2)
// }).then(()=>{
//     return getData(3)
// }).then((res)=>{
//     console.log(res)
// })
//resolve =.then reject=catch
// const getPromise = ()=>{
//     return new Promise((resolve, reject) => {
//         console.log(" promices")
//       //  resolve("Mission Success")
//         reject("network error")
//     })
// }
// let promice = getPromise();
// //value / info was resolve to use then for adding sum info and ect mahiti
// promice.then((res)=>{
//     console.log("Promise Fulfilled", res)
// })
// //reject = .catch
// promice.catch((err)=>{
//     console.log("Promise was not Fulfilled", err)
// })

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           //  console.log("data", dataId)
//           //  resolve("success")
//           reject("ERROR")
//             if (getNextData) {
//                 getNextData()
//             }
//         }, 5000);
//     })
// }



//Promise Chain
// function asyncFucn1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some Data1")
//             resolve("Success")
//         }, 4000);
//     })
// }
// function asyncFucn2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some Data1")
//             resolve("Success")
//         }, 4000);
//     })
// }

// console.log("Fetching data1 ....")
// asyncFucn1().then((res) => {
//     //console.log(res);
//     console.log("Fetching data2 ....")
//     asyncFucn2().then((res) => {
//         // console.log(res)
//     })
// })


//async and await
//simple ex
// async function nam() {
//     console.log("nam")
    
// }
//await is using in th async fuction
//as compar to callback-halls and promise-chain to async-await is very easy
//loocking three code to compair to async-await is very easy
function api() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Weather data")
            resolve(200)
        }, 2000);
    })  
}

async function weatherData() {
    await api();//1ft time
    await api()//2 time
}

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId)
            resolve("success")
        }, 3000);
    })
}

async function getAllData() {
    console.log("Loading Data-1.....")
    await getData(1)
    console.log("Loading Data-2.....")
    await getData(2)
    console.log("Loading Data-3.....")
    await getData(3)
    console.log("Loading Data-4.....")
    await getData(4)
    console.log("Loading Data-5.....")
    await getData(5)
}
//iife- immeditely invoke fuction expression
//fuction was automatically run or fuction not calling --only 1 time run
//type 1.(fuction(){})(), 2.(()=>{})(), 3. (async()=>{})( )
(async function () {
    console.log("Loading Data-1.....")
    await getData(1)
    console.log("Loading Data-2.....")
    await getData(2)
    console.log("Loading Data-3.....")
    await getData(3)
    console.log("Loading Data-4.....")
    await getData(4)
    console.log("Loading Data-5.....")
    await getData(5)
})()