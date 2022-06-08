let pastMusicButton = document.querySelectorAll(".music-button")[0];
let pauseMusicButton = document.querySelectorAll(".music-button")[1];
let playMusicButton = document.querySelectorAll(".music-button")[2];
let nextMusicButton = document.querySelectorAll(".music-button")[3];
let music = document.querySelector("audio")

pastMusicButton.addEventListener("click", () => {

})

pauseMusicButton.addEventListener("click", () => {
    music.pause()
    document.querySelector(".play-music").style.display = "block"
    document.querySelector(".pause-music").style.display = "none"
})

playMusicButton.addEventListener("click", () => {
    music.play()
    document.querySelector(".play-music").style.display = "none"
    document.querySelector(".pause-music").style.display = "block"
})

nextMusicButton.addEventListener("click", () => {
    
})