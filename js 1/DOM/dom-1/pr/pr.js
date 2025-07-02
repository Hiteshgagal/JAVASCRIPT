//q-1
// let h = document.body.querySelector("h2").append(" From MY Work")
// console.log(h)
//or
let h2 = document.querySelector("h2")
console.log(h2.innerText)
h2.innerText = h2.innerText + " From My Work"

//q-2
// let box1 = document.body.children[1]
// let box2 = document.body.children[2]
// let box3 = document.body.children[3]
// box1.innerHTML = "Hellow"
// box2.innerHTML = "Hellow i am hecker "
// box3.innerHTML = "hey w2hat ypu doing"
//or
// let boxes = document.querySelectorAll(".box")
// boxes[0].innerText = "I am hit"
// boxes[1].innerText = "I  hit"
// boxes[2].innerText = " am hit"
//many div schange contant
let boxes = document.querySelectorAll(".box")
let ind = 1;
for (const box of boxes) {
    box.innerText = `I am Devils ${ind}`;
    ind++
}