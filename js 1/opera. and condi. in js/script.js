//syntex = rules
console.log("Chapter-2 Operators and conditions statment")
//console.log("coment in js /**/  //")
//for singal line
/*for multipal line */

//artimentic operators
// let a = 5;
// let b = 3;
// console.log("a =", a, "b =", b)
// console.log( "a + b =", a+b)
// console.log( "a - b =", a-b)
// console.log( "a * b =", a*b)
// console.log( "a / b =", a/b)
// console.log( "a % b =", a%b) //modulus
// console.log( "a ** b =", a**b) // exponentiation


//unary operators ++ --  ++=incremen1t --=decremnt-1
//a = a+1;
//a++;

//preencremnt a++, ++a postecremnt
//pre decrfement a--, --a post dicremnt
//a--;
//console.log("++a = ", ++a)
// console.log("a-- = ", a--)
// console.log("a-- = ",a)
// console.log("a++ = ", a++)
// console.log("a++ = ",a)



//assingment operators = += -= *= %= **=
//let a = 5;
//let b = 2;
//a+= 4 // a  = a+4 = 5+4=9
//a-= 4 // a  = a-4 = 5-4=1
// a*= 4 // a  = a*4 = 5*4=20
//a/= 4 // a  = a/4 = 5/4=1.25
// a%= 4 // a  = a%4 = 5%4=1
//a**= 4 // a  = a**4 = 5**4=625
//console.log(a)

//comparison operators = == === != !== > >= < <=
// let a = 5;
// let b = "5";
//  console.log("a == b", a==b) //true
//  console.log("a === b", a===b) //false


// console.log("a != b", a!=b)
// console.log("a !== b", a!==b)
// console.log("a > b", a>b)
// console.log("a < b", a<b)

// //let b = 5;
// console.log("a <= b", a<=b)
//  console.log("a >= b", a>=b)

//logocal operators logical and&& logicalor|| logical not!
// let a = 6;
// let b = 5;
//&& cheking a condition are true its return true butr con1 and con2 will be true in js
//console.log('con1 && con2 =', a > b && a===6)
//console.log('con1 || con2 =', a < b || a===6)//only  one condition is right to return true
// console.log('a<b =', !(a < b) ) // true=false false=true
// console.log('a>b =', !(a > b) ) // true=false false=true


//condition statement if if-else else-if
 //let age = 20;
 //if
 let age = 18;
 if(age >= 18){
    console.log("You can go to Vot")
 }
 if(age < 18){
    console.log("You cannot  Vot")
 }
//if-else
 let mode = "dark";
 let color;
  if(mode=== "dark"){
    color = "black";
  }
  else{
    color = "white"
  }
  console.log(color);

  let num = 1;
  if(num%2===0){
    console.log( num, " even number")
  }else{
    console.log(num, " odd number")
  };

//else-if
let mod = "dark";
let colors;
if(mod ==="dark"){
colors = "black"
}else if(mod === "blue"){
colors="blue"
}else if(mod==="yellow"){
colors = "yellow"
}else{
colors = "white"}

console.log(colors)

//trrnary operators ? :
let ages = 25;
let c = ages >= 18 ? "adult" : "no Adult";
console.log(c);