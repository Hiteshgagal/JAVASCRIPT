//q-1
let btn = document.createElement("button")
btn.innerText = "Click Me";
btn.style.background = "red"
btn.style.color = "white"
let body = document.querySelector("body").prepend(btn)

//q-2
let para = document.querySelector("p")
para.classList.add("newClass")
