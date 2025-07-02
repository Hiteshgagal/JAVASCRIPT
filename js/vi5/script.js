function nice(name) {
    console.log("I Am " + name)
    console.log("Hey " + name + " you")
    console.log("Hey " + name + " Your Nice Guy")
    console.log("Hey " + name + " Why Your Crying")
    
}
nice("Herry")
nice("Hitesh")

function sum(a, b, c = 3){
    // console.log(a + b);
    return a + b + c
}
result = sum(3, 5)
result1 = sum(1, 3)
result2 = sum(2, 4)
console.log("The sum of these numbers is: ", result)
console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)

const func1 = (x)=>{
    console.log("Whats your Number", x)
}
func1(23);
func1(2);
func1(3);