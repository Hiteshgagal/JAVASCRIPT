let btn1 = document.querySelector("#btn1")
// btn1.onclick = (evt) => {
//     console.log("Thanks for click")
//     let a = 25;
//     a++;
//     console.log(a)
//     console.log(evt)
//     console.log(evt.type)
//     console.log(evt.target)
//     console.log(evt.clientX, evt.clientY)            
// }
//last tipe event work 
//inline and .js the prayorities for .js
// let div = document.querySelector("div")
//  div.onmouseover = (evt) => {
//     console.log("Sorry To Say Not Your")
//      console.log(evt)
    // console.log(evt.type)
    // console.log(evt.target)
    // console.log(evt.clientX, evt.clientY) console.log(evt)
  
//  }


//using ADDEVENTLISTRENER and edding
//sem elements par  multypal eventlister rakhi sakaya
btn1.addEventListener("click", (evt) =>{
    console.log("Hellow")
})
btn1.addEventListener("click", () =>{
    console.log("Hellow2")
})

btn1.addEventListener("click", () =>{
    console.log("Hellow4")
})
//remove event listre
const hand3 = () =>{
    console.log("Hellow3")
}
btn1.addEventListener("click", hand3)
btn1.removeEventListener("click", hand3)
