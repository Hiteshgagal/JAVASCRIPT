let button = document.getElementById("btn")

// button.removeEventListener("click", ()=>{
//    document.querySelector(".box").innerHTML = "Atal-Nagar Bhuj Katchh"
// })
button.addEventListener("click", ()=>{
   document.querySelector(".box").innerHTML = "Atal-Nagar Bhuj Katchh"
})
button.addEventListener("contextmenu", ()=>{
   alert("Don't Tauch the text")
})
document.addEventListener("keydown", (e)=>{
   console.log(e, e.key, e.keyCode);
})