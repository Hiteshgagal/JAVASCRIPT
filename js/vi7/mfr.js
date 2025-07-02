// m = Map 
// f = filter
//  r = reduse

//map
let arr = [1, 13, 5, 7, 11];
 let newArr = arr.map((e)=>{
    return e**2
 })

console.log(newArr)

//filter

// const greaterThanSeven = (e)=>{
// if(e>7){
//     return true
// }
// return false
// }
// console.log(arr.filter(greaterThanSeven))
//short und
// console.log(arr.filter((e)=>{
// if(e>7){
//     return true
// }
// return false
// }))


//reduse
let hd = [1, 2, 3, 4, 5, 6]
const red = (a, b)=>{
    // return a+b
    // return a-b
    // return a/b
    return a*b
}
console.log(hd)
console.log(hd.reduce(red))

// arrey form
// console.log(Array.from("harry"))