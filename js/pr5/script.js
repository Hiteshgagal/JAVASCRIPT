function createCard(title, Cname, views, monthOld, duration, thumbnail) {
    let  hitesh
    if (views < 1000000) {
        hitesh = views/100 + "k";
    }
    else if (views > 1000000){
     hitesh   = views/1000000 + "m";
    }
    else{
        hitesh = views/100;
    } 
    let html = ` <div class="container">
        <div class="card">
            <div class="imges">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${Cname} . ${hitesh} views . ${monthOld} month ago "</p>
            </div>
        </div>
    </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}    
createCard("Indroduction to backend | Sigma wed dev video #2", "codWithharry", 56000, 7, "31:12", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ")




