//Basis About API
console.log("API");
const factHead = document.querySelector("#had");
const URL = "https://cat-fact.herokuapp.com/facts";
const btn =document.querySelector("#btn")

const getFacts = async () =>{
     console.log("Getting Data")
      let response = await fetch(URL) //ftach method
      console.log(response)  //json foramet
    //  console.log(response.status)
    let data = await response.json()//json method makes api for readeable form
   // console.log(data)
    factHead.innerText = data[2].text;
 }
    btn.addEventListener("click", getFacts)