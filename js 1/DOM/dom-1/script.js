//console.log(window)//give all info page
console.log(window.document)//gives a html code
console.dir(window) //part of window
console.dir(document.body)
console.dir(document.body.childNodes[0])
console.dir(document.body.style.background = "yellow")
//console.dir(document.body.childNodes[3].innerText = "abcd") //change value of p
//by id
 let h = document.getElementById("h1");
 console.dir(h)
 //by class
let c = document.getElementsByClassName("h4");
console.dir(c)
//by tag-name
 let t = document.getElementsByTagName("p")
console.dir(t)
//querry selector gives a nodList -single
let q = document.querySelector(".para")
console.dir(q)
//by qierry selectorall -multipal
let ql = document.querySelectorAll("#h1")
console.dir(ql)

console.log(q.tagName) //return tagname
//console.log(document.body.innerText) //return only content
//console.log(document.body.innerHTML) //return tag and his content
//console.log(document.body.innerText = "hellow") //fully change the contanct
//console.log(document.body.innerHTML = "<a>Clicl</a>") //fully chang contant and make a tags
//console.log(document.body.querySelector("h1").innerText = "Clicl") //fully chang contant
//console.log(document.body.querySelector("h1").innerHTML = "<i>he</i>") // chang contant and tag ex h1 to i
//console.log(document.body.querySelector("h4").textContent) // hidden and content showing
