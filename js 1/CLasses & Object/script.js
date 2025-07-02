//about Protot type
const student = {
    fullName: "Hitesh Gagal",
    marks: 64.3,
    printMarks: function () {
        console.log("Marks = ", this.marks)
    },
}

const employee = {
    caclTax() {
        console.log("Tax rate is 10%")
    }
}

const karanArjun = {
    salary: 50000,
    caclTax() {
        console.log("Tax rate is 20%")
    }
}
const karanArjun1 = {
    salary: 50000,
}
const karanArjun2 = {
    salary: 50000,
}
const karanArjun3 = {
    salary: 50000,
}
karanArjun.__proto__ = employee;
karanArjun1.__proto__ = employee;
karanArjun2.__proto__ = employee;



//About Classes
//sem tamplet par multypal object banavava hoy
class toyotaCar {
    constructor(brand, mileage) {
        console.log("Creating new Objects")
        this.brandName = brand;
        this.mileage = mileage;
    } //contructor is using a that time creating object this time - constroctor ne object banavti vakhte vaparvama aave chhe
    start() {
        console.log("start")
    }
    stop() {
        console.log("stop")
    }
    // setBrand(brand){
    //        this.brandName = brand;
    // }
}

let fortuner = new toyotaCar("fortuner", 12); //(for,12) is contractor
console.log(fortuner)
//fortuner.setBrand("fortuner")
let lexus = new toyotaCar(10)
//lexus.setBrand("Tata")
console.log(fortuner)


//exdents
class parent {
    hello() {
        console.log("hellow")
    }

}
//parent ki value child ko bhi milegi
class child extends parent { }
let obj = new child()



class Person {
    constructor(nam) {
        this.species = "Homo Speciens"
        this.nam = this.nam;
    }
     eat() {
         console.log("Eat")
     }
    // sleep() {
    //     console.log("sleep")
    // }
    // work() {
    //     console.log("Do nothing")
    // }
}
// work done me he isiliye child wal aayega
class Engineer extends Person {
    constructor(nam) {
      //  console.log("Enter child Constaurctor")
        super(nam);//to invoke parent class consteuctor
       // this.branch = branch
      //  console.log("Exit child Constaurctor")
    }
    work() {
        super.eat()
        console.log("work")
    }
}
 let engObj = new Engineer("hell")
// let engObj = new Engineer("chemical engg")
// class doctor extends Person {
//     work() {
//         console.log("Chekink patients")
//     }
// }
// let myobj = new Engineer();
// let myobj1 = new doctor();


//error Handling

let a =10; 
let b = 5;
console.log(a+b)
console.log(a+b)
console.log(a+b)
try {
    console.log(a+c)
}
catch(err){
    console.log(err)
}
console.log(a+b)
console.log(a+b)
console.log(a+b)
console.log(a+b)
console.log(a+b)