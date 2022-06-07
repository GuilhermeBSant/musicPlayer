let b1 = document.querySelectorAll(".music-button")[0];
let b2 = document.querySelectorAll(".music-button")[1];
let b3 = document.querySelectorAll(".music-button")[2];

b1.addEventListener("click", () => {window.location.reload()})
b2.addEventListener("click", () => {
    
    b2.setAttribute("class","stopMusic")
    b2.setAttribute("data-feather","play-circle")
    feather.replace()
    
})

b3.addEventListener("click", () => {window.location.reload()})