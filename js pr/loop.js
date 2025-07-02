console.log("The types of loops");
 for (let i = 0; i < 100; i++) {
console.log(i)
 }

let obj = {
    name: "hitesh",
    role: "Hecker",
    company: "Alpa"
}
 console.log(obj)
  for (const key in obj) {
         const element = obj[key];
         console.log(key, element)
     }

 for (const c of "HITESH") {
     console.log(c)
 }

 let i = 0;
 while (i<6) {
     console.log(i)
     i++;
 }
let e = 10;
do {
    console.log(e)
         i++;
} while (e<6);