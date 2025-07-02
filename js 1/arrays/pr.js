// //q-1
// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
//  for (const val of marks) {
//     sum +=val
//  }
//  let avg = sum / marks.length
//  console.log(`the avg of class is ${avg}`)

 //q-2
// let items = [250, 645, 300, 900, 50]
//  let i = 0;
//  for (const val of items) {
//     console.log(`value is the ${i} = ${val}`)
//     let offer = val /10;
//     items[i] = items[i] - offer;
//     console.log(items[i])
//     i++;
//  }

// for (let i = 0; i < items.length; i++) {
//       let offer = items[i] /10;
//     items[i] -= offer
// }
// console.log(items)

//q-3
let company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
// company.shift()
//company.splice(2, 1, "Ola")
company.push("Amazon")
console.log(company)