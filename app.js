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

music.addEventListener("timeupdate", () => {
    let bar = document.querySelector(".bar")
    let currentMomentOMusic = Math.floor((music.currentTime / music.duration) * 100)
    bar.setAttribute("style", `width: ${currentMomentOMusic}%`)
    let musicTime = document.querySelector("#time")
    musicTime.textContent = secondsForMinutes(Math.floor(music.currentTime))
})

function secondsForMinutes(seconds){
    let minuteSpace = Math.floor(seconds/60);
    let secondSpace = seconds%60
    if(secondSpace < 10) { secondSpace = `0${secondSpace}` }
    if(minuteSpace<10) { return "0"+minuteSpace+":"+secondSpace }else{ return minuteSpace+":"+secondSpace}
}
