console.log("Variables and Data Types")

fullName = "Hitesh";
Age = 18;
price = 150.10;
x = null;
y = undefined;

fullName = 12;

console.log(fullName, Age, price, x, y)

//bulliean value
//isFollow = false;
isFollow = true;
console.log(isFollow)

//rull n.1;
ofName = "DH";
ofname = "HD";
console.log(ofName)

//letters digits underscore $ allowed
//ex
ful_lid_ = "hites";
console.log(ful_lid_)

//reserved word js
Console = "hel";
console.log(Console);

//let var const
//redeclered
// var age = 12;
// var age = 13;
// var age = 14;
// console.log(age)
//let is decelerd one time write and upadeted
// let Age = 12;
//  Age = 13;
//  Age = 14;
// console.log(Age)
//const is block scope
const num = 12;
console.log(num);

//data types 
// primitive types: number strimg boolean undfined null bigint symbol
//let numb = BigInt(12);
let numb = Symbol(12);
console.log(numb);

//nonPrimiteive types:object(array fuction)
const student = {
    name: "Hitesh",
    age: 20,
    pass: true,
};
  student["age"] = student["age"] + 1;
  student["name"] = "HiteshKumar"
console.log(student["age"])
console.log(student["name"])


let a = "123" + "123";
let b = "a3" + "b3";
console.log(b)