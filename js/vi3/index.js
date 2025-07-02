console.log("Hello I am Conditional Tutorial")

let age = "19";
// let grace  = 2; //for comparotion oppertotor

// Opraters in Js
// age += grace//incriment
// console.log(age)
// age -= grace//dicriment
// console.log(age)
// console.log(age + grace) //Addition
// console.log(age - grace) // subtraction
// console.log(age * grace) //maltiplication
// console.log(age / grace) //exponentiation
// console.log(age ** grace) // division
// console.log(age % grace)  //modulas

// assigment operator
// console.log(age +=  grace) 
// console.log(age -= grace) 
// console.log(age *= grace) 
// console.log(age /= grace) 
// console.log(age **= grace) 
// console.log(age %= grace) 

// comparition operator
// == != === !== > < >= <= ?
//logical operetots
// && || !
/*njflp;oemk] */ //old comment method
// if(age != 18){
//     console.log("you can Drive")
// }
// else{
//     console.log("You cannot drive")
// }

// if((age + grace)>18){
//     console.log("you can Drive")
// }
// else{
//     console.log("You cannot drive")
// }

//new leder if else-if else
if (age == 18) {
   console.log("you can Drive")
}
else if (age == 0) {
   console.log("Are you Kiding")
}
else if (age == 1) {
   console.log("Are you Again Kiding")
}
else {
   console.log("You cannot drive")
}

a = 6;
b = 8;
let c = a > b ? (b-a) : (a-b);
console.log(c);
/*
transletes to (shorthand) 
if(a>b){
let c = a-b
}
else{
let c =b-a}
*/