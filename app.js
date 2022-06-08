let previousMusicButton = document.querySelectorAll(".music-button")[0];
let pauseMusicButton = document.querySelectorAll(".music-button")[1];
let playMusicButton = document.querySelectorAll(".music-button")[2];
let nextMusicButton = document.querySelectorAll(".music-button")[3];
let music = document.querySelector("audio")
let musicIndex = 0 ;
let musicsProps = [
    {
        title: "Ainda gosto dela - ",
        artist: "Skank",
        img: "./img/aindagostodela.png",
        src: "./music/Ainda Gosto Dela.mp3"
    },
    {
        title: "Despedida - ",
        artist: "Selvagens à procura da lei",
        img: "./img/despedida.jpg",
        src: "./music/Despedida.mp3"
    },
    {
        title: "Exagerado - ",
        artist: "Cazuza",
        img: "./img/exagerado.webp",
        src: "./music/Exagerado.mp3"
    }
]
let musicTitle = document.querySelector("#music-name")
let musicArtist = document.querySelector("#artist")
let musicImage = document.querySelector(".music-photo img")

window.onload = renderMusic(0)

//Events
previousMusicButton.addEventListener("click", () => {
    if(musicIndex <= 0){
        musicIndex = 2
    }
    musicIndex--
    renderMusic(musicIndex)
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
    if(musicIndex >=(musicsProps.length - 1)){
        musicIndex = 0
    }
    musicIndex++
    renderMusic(musicIndex)
})

music.addEventListener("timeupdate", () => {
    let bar = document.querySelector(".bar")
    let currentMomentOMusic = Math.floor((music.currentTime / music.duration) * 100)
    bar.setAttribute("style", `width: ${currentMomentOMusic}%`)
    let musicTime = document.querySelector("#time")
    musicTime.textContent = secondsForMinutes(Math.floor(music.currentTime))
})


//Functions
function secondsForMinutes(seconds){
    let minuteSpace = Math.floor(seconds/60);
    let secondSpace = seconds%60
    if(secondSpace < 10) { secondSpace = `0${secondSpace}` }
    if(minuteSpace<10) { 
        return "0"+minuteSpace+":"+secondSpace
     }else{
        return minuteSpace+":"+secondSpace
     }
}

function renderMusic(index){
    music.setAttribute("src", musicsProps[index].src)
    music.addEventListener("loadeddata", () =>{
        musicTitle.textContent = musicsProps[index].title
        musicArtist.textContent = musicsProps[index].artist
        musicImage.src = musicsProps[index].img
    })
}
