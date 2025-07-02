function nice(name) {
    console.log("Hey " + name + " You complete your HTML")
    console.log("Hey " + name + " You complete your CSS")
    console.log("Hey " + name + " You complete your JAVASCRIPt")
    console.log("Hey " + name + " You complete your REACT")   
}
nice("HD")
nice("Chetan")

function sum(a, b, c=1) {
    console.log(a, b, c) 
  return a + b + c  
}
result = sum(2, 5)
result1 = sum(4, 1, 2)
result2 = sum(0, 3)

console.log(" the anwer of this sum is: ", result)
console.log(" the anwer of this sum is: ", result1)
console.log(" the anwer of this sum is: ", result2)

const func1 = (x)=>{
    console.log("I am an arrow fuction", x)
}
func1(23);
func1(2);
func1(3);