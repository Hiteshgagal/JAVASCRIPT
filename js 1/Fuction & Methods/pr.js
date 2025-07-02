//q-1
function countVow(str) {
    let count = 0;
    for (const char of str) {
        if(char === "O" || char === "i" || char === "a" || char === "u" || char === "e"){
            count++;
        }
    }
    return count;
}
//q-2
const countvowa = (strs)=>{
    let count = 0;
    for (const char of strs) {
        if(char === "O" || char === "i" || char === "a" || char === "u" || char === "e"){
            count++;
        }
    }
    return count;
}

//q-3
// let numss = [1,2,3,4,5]
// numss.forEach((nums) => {
// //console.log(nums*nums)
// console.log(nums**2)
// });

//q-4
// let marks = [90, 86, 91, 92, 89];
// let add = marks.filter((val)=>{
//   return  val > 90
// })

// console.log(add)

//q-5
let n =  prompt("Enter number")
 let arr = [];
 for (let i = 1; i <= n; i++) {   
    arr[i-1] = i; //makes numbers
 }
 console.log(arr)

 let summ = arr.reduce((pre, curr)=>{
    return pre + curr; //encrise
 })
 console.log(summ) //value are +

 let smm = arr.reduce((pre, curr)=>{
    return pre * curr; //malutple *
 })
 console.log(smm) // valu * 