// let div = document.querySelector("div")
// console.log(div.getAttribute("id"))//gives tags ke entribute
// let para = document.querySelector("p")
// console.log(para.setAttribute("class" , "paragraph"))//change the entributes value / (old, new)

//change style
// div.style.background = "red"
// div.style.fontSize = "20px"

//creating ellemnts tag
 let newbtn = document.createElement("button") //creating element
 newbtn.innerText = "Selsect One"
 console.log(newbtn)
 let div = document.querySelector("div")
 //div.append(newbtn)//eding element in last
// div.prepend(newbtn)//eding element in first
 //div.before(newbtn)//eding element in outer tag in first
 div.after(newbtn)//eding element in outer tag in last

 //remove or delete
 let para = document.querySelector("p")
 para.remove()
