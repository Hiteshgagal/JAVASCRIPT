let a = prompt("Enter Your Number")
let b = prompt("Enter second Number")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry This not allowed")
}
let sum =parseInt(a) + parseInt(b);
function main(){

    let x = 5;
    try {
        console.log("The sum is", sum*x)
        return true
        
    } catch (error) {
      console.log("num is not found")
        // throw SyntaxError(" The Number is not Found")
        return false
     // alert(error.name)
     // alert(error.message)
    //  alert(error.stack)
        
    }
    finally{
        console.log("This File Is Closes")
    }
}
let c = main()