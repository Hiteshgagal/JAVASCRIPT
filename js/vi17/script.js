//objects oriented programing = prototype
// let obj = {
//     a: 1,
//     b: "Hitesh"
// }
// console.log(obj)

// //add prototype
// let animal ={
//     eats: true
// };
// let rabbit ={
//     jumps: true
// };

// rabbit.__proto__= animal;
// rabbit.[[Prototype]] = animal;

//objects oriented programing = class
class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is Creating")
    }
    eats() {
        console.log("Object is eats")
    }
    jumps() {
        console.log("Object is Jump")
    }
}
// add old object in new object by extends
class lion extends Animal{
    constructor(name) {
        super(name)
        console.log("Object has Creating")
    }
    jumps() {
        // super.jumps()     //animal class and line class jumps are in aeksathe aavse line class ma
        console.log("Object is not Jump")
    }
}


let a = new Animal("Monkey");
console.log(a)
let l = new lion("Havaj");
console.log(l)