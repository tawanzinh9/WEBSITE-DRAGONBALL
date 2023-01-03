const character = document.querySelector(".character")
const pipe = document.querySelector(".pipe")
const p = document.querySelector(".mouse-p")
const count = document.querySelector(".count")
let seg = 0



const jump = () => {
    character.classList.add("jump")

    setTimeout(() => {
        character.classList.remove("jump")
    }, 500)
}

function timer () {
    let x = setInterval(() => { 
        seg++
        count.textContent = seg
    }, 1000)

   
}

const loop = setInterval (() => {
    let pipePosition = pipe.offsetLeft; 
    let characterPosition = +window.getComputedStyle(character).bottom.replace("px", "")

    if(pipePosition <= 60 && pipePosition > 0 && characterPosition < 70) {
        pipe.style.animation = "none"
        pipe.style.left = `${pipePosition}px`

        character.src = "./imgOthers/dead.png"
        character.style.width = "100px"
        character.style.marginLeft = "90px"
        character.style.marginBottom = "70px"

        p.style.left = "430px"
        p.style.transition = "1.6s"
        p.style.fontSize = "27px"
        p.textContent = "GAME OVER"
        p.style.color = "red"

       
       seg = 0
       count.textContent = "Try Again"
        
        count.style.transition = "1.6s"
        count.style.color = "red"
        count.style.fontSize = "18px"
        count.style.right = "440px"
        

        
       

} 10})








document.addEventListener("keydown", jump)

timer()

