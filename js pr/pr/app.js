console.log("practiset for javascript")//log in console
console.log("This is Console")//log in console
// //variables
// myName = "hito";
// ge = 12;
// price =99.99;
// x = null;
// y = undefined;
// //bulie value (true-false)
// //isFollow = true
// isFollow = false;
// console.log(myName, ge, price, x, y, isFollow);
// //this method not show error= @#%not allowed but niche mujab lakhvu
// p =99.99;
// p_ =99.99;//_P not show error
// p123 =99.99;//123p show error
// p$ =99.99;//$p not show error

//RESERV WORD NOT USE FOR VARIABLE SHOW ERROR = NAME BREACK CONST CONSOLE EXT IS RESERV WORD DON'T USE FOR VAR.
// console = "hellow";
// console.log(console)

console.log("variables in js")
//let const & var
// let fullName ="hitesh";
// let age =14;
// console.log(age)

// var price = 23;
// console.log(price)

//its wrong for code is globali 
// var a =23;
// var a  =24;
// var a = 50;
// console.log(a)

//use let showing error = only one time use and one type at variable second time not using those variable
// let b = 2;
// let b = 3;
//but value ko update kari shakay
// let c = 23;
//  c = 26;
//  c = 25;
//  console.log(c)

// //const 
// //give value only one time not changebal - block scope = value is fixed
// const d = 12;
// //d= 23;
// console.log(d)//showing error only one time use

//var =global scope re-declared % update
//let = block scope re-declare Upadate but its only
//const = blocke scope cannot re-declared or updateed


//data types
console.log("data types in js")
//primti data type and non-primitive data-type
//primitive data types = = number string boolean undifined null biglnt symbol
// let fname  = "hitesh";
// let fnamber  = 12;
// let ffolow  = true;
// let fund;
// let fnull = null;
// let fbignt = BigInt("123") //in last add n
// let fsymbol = Symbol("hitesh3") //in last add n

// console.log(typeof fname, typeof fnamber, typeof ffolow, typeof fund, typeof fnull, typeof fbignt, typeof fsymbol)
// //non-primitive data-type
// //objects[array fuction] | object =collection of value
// //example of object
// const student = {
//     fullName: "Hitesh Kumar",
//     age: 19,
//     cgpa: 9,
//     isPass: true,
// }
// //console.log(student)
// console.log(student["age"]) // show keys and value
// console.log(student.age) // show keys and value


//Operators and Conditional Statements
console.log("Operators in js")
//comanly opera. + - * /

// let a = 5;
// let b = 2;
// console.log("a = ", a, "& b = ", b)
// console.log("a + b = ", a + b)
// console.log("a - b = ", a - b)
// console.log("a * b = ", a * b)
// console.log("a / b = ", a / b)
// // % moduls   ** exponentiation 
// console.log("a % b = ", a % b) //give shesh
// console.log("a ** b = ", a ** b) //give varg b= 2 to 5*5= 25 is answer

//unary operators
// posr= ++ increment -- decrement
// let c = 5;
// let d = 3;
// //a++;// c+ 1 = 6;
// //b--// b-1 = 2; /// in post pehele value aavse pachhi change thse
// // console.log("c = ", c)
// // console.log("d = ", d)

// //pre ecrement and decrement
// //++c --d
// --d;
// ++c;
// console.log(d) 
// console.log(c)// in pre first change value


//Assingment Operators
//= += -= *= %= **= =/
// let e = 5;
// let f = 6;
// console.log("e = ", e," &  f = ", f)
//e+=4
//console.log("e = ", e) //e+= = 5+4= 9 = e =e + 4 =5+4=9
//  e-=4
// console.log("e = ", e) //e-= = 5-4= 1 = e =e + 4 =5-4=1
//  e*=4
// console.log("e = ", e) //e*= = 5*4= 20 = e =e * 4 =5*4=20
//  e%=4
// console.log("e = ", e) //e%= = 5%4= 1 = e =e % 4 =5%4=1
//  e**=4
// console.log("e = ", e) //e**= e ** 4 =5*5*5*5=625 
//  e/=4
//console.log("e = ", e) // e/=4 = 5/4 = 1.25



//comparison operators
//equal to ==, equal to & type ===  not equal to !=   not equal to & type !==
//g = 4;
//h=  4; 
//h=  "4";//===is chencking type 4=4 to true but 4 ="4"= is false
//h=  "4"; //!== give true why ? value are same bur h ="4" a string
//console.log("g==h", g==h) //return a boolian value true or false =not chenking type
//console.log("g === h", g===h) //return a boolian value true or false //cheking type
//console.log("g != h", g!=h) //return a boolian value true or false //not cheking type
//console.log("g !== h", g!==h) //return a boolian value true or false // chenking type

// > >= < <=
//i = 5;
// j = 6;
// console.log("i > j", i > j) //boolian value
// console.log("i < j", i < j) //boolian value
// console.l"i >= j", i >= j) //boolian value
// console.log("i <= j", i <= j) //boolian value

//logical operators
//logical And && logical or || logical not !
//k =6;
//l =6
//logical and is to or obove condition is true = all cond are true is the rule of lo. end
// let cond1 = k > l; //true
// let cond2 = k ===6; // true
// console.log("con1 & cond2 are same = ", cond1 && cond2)

//only one cond are true to true
// let cond1 = k < l; 
//  let cond2 = k ===6;
//  colsole.log("one cond are same = ", cond1 || cond2)

//lo. not is ulto kare
//console.log("!(k<l) =", !(k<l))


//tarnory operators
//a ? b : c
// let ages = 25;
// let r =ages >= 18 ? "vote" : "not vote"
// console.log(r)

//conditional statement
console.log("conditional statement in js")
//if{}, if and else, if else if else
// let a= 9;
// //if{}
// if(a > 5){
//     console.log("wye")
// } if(a< 5){
//     console.log("bye")
// }
// //if elese
// let age = 19;
// if(age > 18){
//     console.log("Your ready for vote")
// }else{
//     console.log("your not ready for vote")
// }
// //if else if else
// let mode = "blue";
// let color;
//  if(mode === "dark"){
//     color= "black";
//  }else if(mode === "blue"){
//     color= "blue";
//  } else if(mode === "yellow"){
//     color= "yellow";
//  } else{
//     color= "white";
//  }
//  console.log(color)


//loops

console.log("loops in js")
//for loop, for in loop, for of loop, while loop, do while loop
//for loop
//  let a =0;
//  for (let i = 1; i < 100; i++) {
//     console.log(i+a)
//  }

//  //for in loop
//  //this loop is for object type
//  let obj = {
//    name:"hitesh",
//    role: "coder",
// company: "google" 
// }
// for (const key in obj) {
//       const element = obj[key];
//       console.log(key, element)
// }

// //for of loop 
// //most ly use for arryas
// //let d = ["hitesh", "gagal","hel"]
// let d = [1,2,3,4,5,6]
// for (const c of d) {
//    console.log(c) 
// }

//while loop
//first cheking second printing
// let i =0;
// while (i<6) {
//    console.log(i)
//    i++;
// }

//do while loop
//let i =10; irst print  and second is cheking
// let i =1;
// do {
//    console.log(i)
//    i++;
// } while (i<6);



//string
//string is inmmuteble
console.log("String in js")
// let str = "Hitesh";
// //string propartys
// console.log(str)
// console.log(str.length) //words count
// console.log(str[1], str[3]) //0 start index = i and e
// console.log(typeof str) 

// //template literals
// let sen = `this is templet litrals ${1+2+3}` //special type string
// console.log(typeof sen) 
// console.log(sen)

// let obj = {
//    price: 10,
//    item: "pen",
// }
// console.log("the cost of", obj.item, "is", obj.price, "ruppies")
// console.log(`the cost of ${obj.item} is ${obj.price} ruppies`) //adding placholder and this is  string interpolation kahevay

//escape charctors in string
// console.log("hitesh\ngagal")//words go to next line
// console.log("hitesh\tgagal".length)// tabs spce and length \t=1charctors

// //strings methods
// let a = "   hitesh  ";
// console.log(a.toUpperCase())//makes to first ABC
// console.log(a.toLowerCase())//makes to second abc
// console.log(a.trim())//remove all white spaces= sratind and end space j kadhe chhe
// let b = "abcdef";
// let c = "ghijkl";
// console.log(b.slice(1,3))//start and end is index and cutting a words and not include a end index
// console.log(b.concat(c))//join to string
// console.log(c.concat(b))//join to string
// console.log(b + c)
// console.log(b.replace("e", 1234)) //replace the words 
// console.log(b.replace("ab", "l")) //replace the words 
// console.log(b.replace("abcdef", "hitesh")) //replace the words 
// let d = "hellololo";
// console.log(d.replace("lo", "p")) //only one charctor was change
// console.log(d.replaceAll("lo", "p")) //maching value was all chnge
// console.log(d.charAt(1))//e = charat is g9ve index value

//Arrays
//array is mutebal
console.log("Learn About Array");
// //how to creat array
// let maks =[23,45,43,54,56];
// let heroes =["hulk", "iran man", "captain", "black panther", "spider man"];
// let mix = [12, "hd", "gj", 23]
// console.log(maks.length)//length
// console.log(typeof heroes) //type is object
// console.log(mix[1]) //index

// //how to chnage array value
// let mak =[23,45,43,54,56];
// mak[2] = 50;
// console.log(mak)

// //loops in array
// let mcu =["hulk", "iran man", "captain", "black panther", "spider man", "straing", "hokay", "Ant-man"];
// //for loop
// // for (let    i = 0; i < mcu.length; i++) {
// //   // const element = mcu[index];
// //   console.log(mcu[i])
// // }

// //for of  loop
// for (const el of mcu) {
//    console.log(el.toUpperCase())
// }

//Arrya method
//push pop tostring concat unshift shift slice splice

//push for adding new in the end
// let fruits = ["banana", "apple", "orange", "papaya"];
// console.log(fruits.push("jayfar", "drakh"))
// console.log(fruits)
// //pop for delete in the last last item delete
// let del = fruits.pop()
// console.log(fruits)
// console.log(del)
// //tostring
// //array convert to string
// console.log(fruits)
// console.log(fruits.toString())

// let m = [23,3,4,35,34]
// console.log(m.toString())

// //concat
// //join multiple arrays
// let marvels = ["iranman", "hulk", "thor", "captain", "hokay", "Black widow"]
// let dc = ["bataman", "superman", "flace", "wonder women",]
// let ind = ["saktiman", "krish"]
// let hero = marvels.concat(dc, ind)
// console.log(hero)

//unshift
//add in start
//he is brother of push || unshift=start and push = end
//  marvels.unshift("loky")
// console.log(marvels)

//shift
//delet in start
//he is brother of push || shift  = start and pop = end
// dc.shift()
// console.log(dc)

//slice 
//not change origanal array
//give start and end index give banne vache je value hoy te aape
// let  val = marvels.slice(2, 3)
// console.log(val)

//splice 
//change a origanal array
//add remove replce
//splice(startindex, deletecount, newelemntadd)
//let arr = [1,2,3,4,5,6,7]
//console.log(arr)
//arr.splice(2,2,102,103)
//add
//arr.splice(2,0,202)
//delete
// arr.splice(1,3)
// console.log(arr)



//function
console.log("learn About fuction")

// function myFaction(){
//     console.log(" my First Function")
// }
// myFaction();
// myFaction();
//function myFaction(msg, n){  //(msg) is parmeters ==params
//     console.log(msg * n)
//     console.log(msg, n)
// }
// myFaction("hellow", 100); //argument

// //NaN = not a number


// //fuction -> 2 NUMBERS , SUM
// function sum(x, y){ //(x, y) is local variable and block scope
//     s = x + y;
//     console.log(x)
//     console.log("before return")
//     return s;//last line of code
//     console.log("after return")
// }
// let val = sum(3, 4);
// console.log(val)
// console.log(x)

//arrow fuctio0n
// console.log("arrow function")
// //modern javascript
// const sum = (a, b) => {
//     return a * b
// }

// let hell = () =>{
//     console.log("hellow")
// }
// hell()
// let hel = () => console.log("hellow"); //for single line code


//loops in array
console.log("loops in array")
//foreach method
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printval(val, ind, arr) {//val is return a number to gin arr value
//     // console.log(val)
//     // console.log(val + 1, ind, arr)
//     console.log(val ** 2, ind, arr)
// });

// let a = ["pune", "delhi", "kanpur"]
// a.forEach((val, ind, arr) => {
//     //  console.log(val)
//     console.log(val.toUpperCase(), ind, arr)
// })
// //3 params ius = value index array


// let n = [23, 24, 2, 5, 26]
// let cal = (num) => {
//     console.log(num * num)
// }
// n.forEach(cal)

//MAP method
//  let a = [12,13,14,15]
//   a.map((val)=>{
//      console.log(val)
//   })
//  //makes new arrya
// let newArr =  a.map((val)=>{
//   return val *val;
//  })
// console.log(newArr)

// //filter
// let b = [1,2,3,4,5,6,7,8,9];
// let even = b.filter((val)=>{
//  //even valu 2,4,6,8  // return  val % 2 === 0
//   //odd vALUE  return  val % 2 !== 0
//   return val > 2;
// }) //filter is makes a new array.
// console.log(even)

// //reduce
// //return single value
// let r = [1,2,3,4, 5]
// const output = r.reduce((res, curr)=>{
// //  return res + curr; //1+2+3+4=10
// return res > curr ? res : curr; //big number was print = 5 //find a largest number
// })
// console.log(output)




//doM = document object model
console.log("Learn About dom")

//window is global objext
// console.log(window)
// console.dir(window.document)
// console.log("hellow")
// window.console.log("hellow11")

// console.dir(window.document.body)
// console.dir(window.document.head)

// document.body.style.background = "yellow";
// document.body.childNodes[5].innerText = "document"


// //dom manipulation
// //by id
// let id = document.getElementById("heading");
// console.log(id)
// console.dir(id)

// //by class name
// let clas = document.getElementsByClassName("para")
// console.log(clas)
// console.dir(clas)

// //by tag name
// let tag = document.getElementsByTagName("h2");
// console.dir(tag)
// console.log(tag)


//querry selector
//give nodes list
//querryselector
// let q = document.querySelector("p");
// console.dir(q)
// console.log(q)
// //querryselctorAll
// let qall = document.querySelectorAll("p");
// console.dir(qall)
// console.log(qall)

// document.querySelector(".para").style.background = "red"
// document.querySelector("#box").style.background = "green"

//properties
//find tagname
// let t = document.querySelector("#box").tagName
// console.log(t)

// //innertext
//  let i =  document.querySelector("#box").innerText
//   document.querySelector("#box").innerText  ="<h1>heyy</h1>"//change text
//  console.log(i)

// //innerhtml
// let h =  document.querySelector("button").innerHTML
//  document.querySelector(".para").innerHTML  ="<h1>heyy</h1>"//change text
// console.log(h)

// //text content
// //let c = document.querySelector("h3").innerText
// let c = document.querySelector("h3").textContent
// console.log(c)
//c.innerText not she content but
//c.textContent she the content

//dom part 2
//let div = document.querySelector("div").getAttribute("id");
// let div = document.querySelector("div");
// console.log(div)
// let val = div.getAttribute("id")
// console.log(val)
//change valu of antrribute
// let p = document.querySelector("p")
// console.log(p)
// let n = p.setAttribute("class", "para2")

// let i = div.setAttribute("id", "box2")

//adding css in inline and chnage value
//let d = document.body.querySelector("div").style.background = "red";

//how it has css
// // let d = document.body.querySelector("div").style;
// // console.log(d)

// //insert element
// let el = document.createElement("button");
// //el.innerText = "<h1> HEllow </h1>"
// el.innerText = " HEllow"
// console.log(el)

// let di = document.querySelector("div")
// //pn the div add a new element
// //di.append(el) //in the div last
// //di.prepend(el) //in the div first
// //di.before(el) //out of div and body first
// di.after(el) //out of div and body last


// //remove element
// let l = document.querySelector("button")
// l.remove()


//events
console.log("Events in javascript");
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//     console.log(evt)
//     console.log(evt.type)
//     console.log(evt.target)
//     console.log(evt.clientX, evt.clientY)
//  console.log("welcome")
//      let a = 14
//      a++
//      console.log(a)

// }
// let div = document.querySelector("div")
// div.onclick = () => {
//     console.log("divided")
// }

//evets listrener
// btn1.addEventListener("click", () =>{
//     console.log("woww")
//     // console.log(evt)
//     //      console.log(evt.type)
// })
// btn1.addEventListener("click", () =>{
//     console.log("woww2")
// })

// const hnd3 = () =>{
//     console.log("woww3")
// }
// btn1.addEventListener("click", hnd3)

// btn1.addEventListener("click", () =>{
//     console.log("woww4")
// })
// //remove event listener
// //remove events mate tene variable ma store karvu
// btn1.removeEventListener("click", hnd3)



//classes and objects
// console.log("learn about classes and objects")
//  const students = {
//     fullName: "Hitesh",
//     marks: 59.59,
//     printMarks: function(){
//         console.log("marks =", this.marks)
//     }
//  }

//how to create proto type
//  const employee = {
//     calcTax(){
//         console.log("tax rate is 10%")
//     }
//  }
//  const karanArjun = {
//     salary: 50000,
//     calcTax(){
//         console.log("tax rate is 20%")
//     }
//  }
//  const karan = {
//     salary: 20000,
//  }
//  const Arjun = {
//     salary: 10000,
//  }
//  karanArjun.__proto__= employee


//classes in js
//  class ToyotaCar{
//     constructor(brand, mileg){
//        console.log("Creating new Objects")
//        this.brands = brand;
//        this.mileg = mileg
//     }
//      start(){
//         console.log("start")
//      }
//      stop(){
//         console.log("stop")
//      }
//     //  setBrand(brand){
//     //     this.brands = brand
//     //  }
//  }
// let fortuner = new ToyotaCar("fortuner", 10);
// console.log(fortuner)
// //fortuner.setBrand("tata")
// let jaguar = new ToyotaCar("", 18);
// console.log(jaguar)
// let alto = new ToyotaCar("nexus", 18);
// console.log(alto)
// //alto.setBrand("nexus")

//inheritance in js
//using exends keywords
// class person{
//     constructor(){
//         this.species = "homo spiese"
//     }
//     eat(){
//         console.log("EAT")
//     }
//     sleep(){
//         console.log("sleep")
//     }
//     work(){
//         console.log("do nothing")
//     }
// }
// class engineer extends person{
//     work(){
//         console.log("build Somthing")
//     }
// }
// class doctor extends person{
//     chekap(){
//         console.log("cheking pesant")
//     }
// }

// let hdObj = new engineer;
// let hd1Obj = new doctor;

// //super keywords
// class Person{
//     constructor(name){
//         this.species = "homo spiese"
//         this.name = name;
//     }
//     eat(){
//         console.log("EAT")
//     }
// }
// class Engineer extends Person{
//     constructor(name){
//        super(name)
//     }
//     work(){
//       //  super.eat()
//         console.log("build Somthing")
//     }
// }
// let engi = new Engineer("hitesh");


//callbacks promises and asyns-await
console.log("learn about callbacks, promices and asyns-await")
//sync in js = Syncronous and asynchrous
// function hell() {
//     console.log("hellow")
// }
// setTimeout(hell, 4000);
// setTimeout(() => {
//     console.log("How are you?")
// }, 4000);


// //callbacks
// setTimeout(() => {
//     console.log("fine")
// }, 4000);
//  function sum(a, b) {
//      console.log(a + b)
//  }
// function calculator(a, b, sumCallback) {
//     sumCallback(a, b)
// }
// calculator(1, 2, sum)

// function getData(dataId){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data", dataId)
//             resolve("success")
//         }, 2000);
//     })
// }
// //async-await
// async function getAllData() {
//     console.log("findind")
//     await getData(1)
//     console.log("findind")
//     await getData(2)
//     console.log("findind")
//     await getData(3)
    
// }
//getAllData()
//promises chain
// getData(1).then((res) => {
//     console.log(res)
//     getData(2).then((res) => {
//         console.log(res)
//         getData(3).then((res) => {
//             console.log(res)
//         })
//     })
// })
//athva / or
// getData(1).then((res)=>{
//     return getData(2)
// })
// .then((res)=>{
//     return getData(3)
// })
// .then((res)=>{console.log(res)})

// //callback hell
// getData(1, () => {
//     console.log("loadind...")
//     getData(2, () => {
//         console.log("loading...")
//         getData(3, () => {
//         })
//     })
// })



//promises
// let promise = new Promise((resolve, reject)=>{
//     console.log("I am PRomises")
// resolve(123)
// reject("some Error")
// })

// const getPromises =()=>{
//  return new Promise ((resolve,reject)=>{
//     console.log("I am Don")
//    // resolve("sucess")
//     reject("no")
// })
// }
// //promise jyare aave tnen vaparva mate .then ane .catch no upyog tghay
// //.then and .catch
// //.then = resolve
// //.catch = reject = error
// let promice = getPromises();
//  promice.then((res)=>{
//     console.log("promises fulfiled")
//  })
// promice.catch((err)=>{
//     console.log("promises not use")
//     console.log(err)
// })

//promises chain
//function asyncFunc(){
//     return new Promise((resolve, rejext)=>{
//         setTimeout(() => {
//             console.log(" data1")
//             resolve("success")
//         }, 4000);
//     })
// }
// function asyncFunc2(){
//     return new Promise((resolve, rejext)=>{
//         setTimeout(() => {
//             console.log(" data2")
//             resolve("success")
//         }, 4000);
//     })
// }
// //promises chain
// console.log("Fetching data1...")
//  asyncFunc().then((res)=>{
//     console.log("Fetching data2...")
//     asyncFunc2().then((res)=>{})
// })


//callbacks > promises > asyns-await
// function api(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("Weather Data")
//             resolve(200)
//         }, 2000);
//     })
// }
// //async await
// async function getWeatherData() {
//     await api()
//     await api()  
// }
// getWeatherData()


console.log("fetch api and api calls")
//api
// const URL = "https://cat-fact.herokuapp.com/facts"
// const factPara = document.querySelector(".fact")
// const btn = document.querySelector("#btn")


// const getFacts = async ()=>{
//     console.log("Getting Data...")
//     let response = await fetch(URL)
//     console.log(response)
//     let data = await response.json()
//     factPara.innerText = data[1].text;
//     //console.log(data)
// }
// btn.addEventListener("click", getFacts)

