console.log("Loops and Strings");

// //for loop
console.log("for loop")
   for (let count = 1; count <= 5; count++) {
         console.log(count)
  // console.log("Hellow New User")
 }

//   let sum = 0;
//   for (let i = 0; i <=5; i++) {
//     sum = sum + i;
//   }
//   console.log(sum)
//   console.log("Tata Bye Khatam")

//while loop
console.log("While loop")
let i =1;
while (i <= 5) {
    console.log(i)
    i++
}

//do while loop
console.log("Do while Loop")
i = 1;
do {
   console.log(i);
   i++
} while (i <= 5);

//for of loop is for strings and arrays
console.log("for of loop");
let str = "IAmHitesh";
let size = 0;
for (const a of str) {
 console.log(" a = ", a)
 size++;   
}
console.log("Size is", size)

//for in loop for objeck
let stud = {
    nmae: "Hitesh",
    age: 19,
    isPass: true,
    class: 12
}
for (const key in stud) {
console.log(key, ":", stud[key])
}

//strings
let hd = "String";
console.log(hd.length)
console.log(hd[0], hd[1])

//template litrals
let shop ={
 item: "pen",
 price: 10
}
console.log("this ", shop.item, "is", shop.price, "$") 
console.log(`this ${shop.item} is ${shop.price} $`) //short hand


console.log(`this is number is ${1+2+3}`)

//ECSPAPE chARCTER
///n going in new line /t give space beetween the word
  //  console.log("Hit\nesh ")
  //  console.log("Hit\tesh ".length)
   //console.log("Hittesh ".toUpperCase())
   // console.log("Hitesh ".toLowerCase())
   // console.log("   Hitesh    ih  ".trim())//trim remove white pce
  //  console.log("Hitesh".slice(2, 6))//start and and
  //  console.log("Hitesh".concat("hit"))//mix and conacat to string- make a single string
  //  console.log("Hitesh".replace("esh", "sh"))//replace word to another word
  //  console.log("Hitesh".replaceAll("sh", "p"))//replace word to another word
    console.log("Hitesh".charAt(0))
    
 
//    let h = "String";
//    let m =  h.toUpperCase()
//    console.log(h)
//    console.log(m)