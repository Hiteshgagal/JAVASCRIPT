let a = 2
function facfor(number){
    let arr = Array.from(Array(number+1).keys())
    let c = arr.slice(1,).reduce((a, b)=> a*b)
    return c
}
console.log(facfor(a))

// 2 nd method
function factotrial(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
      fac = fac * index
        
    }
    return fac
}
console.log(factotrial(a))