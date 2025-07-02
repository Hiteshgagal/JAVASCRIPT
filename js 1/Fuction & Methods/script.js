console.log("Today  i am Learning a Fuction")
function myFunction(msg, n) {
    console.log(msg, n)
}
myFunction("Hellow", 100);
function my_Function() {
    console.log("Helolo")
}
my_Function();

function sum(x, y){
    //in the fuction param are working
//console.log(x)
s = x + y;
console.log("hello")
return s;
console.log("Hello") // use return word after do not work any fuction
}
//  let r = sum(1, 3);
//  console.log(r)
// // console.log(x) // fuction params are not working in fuction outside

// //arow fuction
// //arow fuction are part of modern javascript

// const arrowSum = (a, b) =>{
//     return a+b
// }

// const arrMul = (a, b) => {
//     return a*b
// }


//foreack-loop inArray
//let arr = [1,2,3,4,5]
let arr = ["hitesh", "rohit", "Pradip"]
arr.forEach((val, ind, arr) => {
    console.log(val.toUpperCase(), ind, arr)
});
//three param in thforeach = value index array


//ARRAYMETHODS
//map method
let number = [12,23,34,12,35,45,65,76]
let nn = number.map((val)=>{
return val
}) //return new arry
console.log(nn)

//filter method
let nu = number.filter((val)=>{
    //print even number
  //  return val % 2 === 0;
  //print odd number
   // return val % 2 !== 0;
    return val < 65;
})
console.log(nu) //return new arrya

//reduce method
let numb = [1,2,3,4,5]
const cal = numb.reduce((res, val) =>{
  //return  res + val
  return  res > val ? res : val; //print largejst/big number
});
console.log(cal)
//.reduce(previes val, current value) and give  a single value