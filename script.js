console.log("Welcome to Spotify")
// audioElement.play();

//initialise the variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songItem'));
let masterPlay = document.getElementById('master');
let currentSongName = document.getElementById('currentSongName');


let songs = [
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "DEAF KEV - Invincible-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Janji-Heroes-Tonight-feat-Johnning", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" }
]

songitems.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//listen to the events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

//handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        let ele = Array.from(document.getElementsByClassName('songItemPlay'));
        let x = ele[songIndex];
        x.classList.remove('fa-play-circle');
        x.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        let ele = Array.from(document.getElementsByClassName('songItemPlay'));
        let x = ele[songIndex];
        x.classList.remove('fa-pause-circle');
        x.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', () => {
        makeAllPlays();
        gif.style.opacity = 1;
        songIndex = parseInt(element.id);
        element.classList.remove('fa-play-circle');
        element.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        currentSongName.innerText = songs[songIndex].songName;
        audioElement.play();
        masterPlay.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9)
        songIndex = 0;

    else
        songIndex += 1;


    gif.style.opacity = 1;
    makeAllPlays();
    let ele = Array.from(document.getElementsByClassName('songItemPlay'));
    let x = ele[songIndex];
    x.classList.remove('fa-play-circle');
    x.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    currentSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.add('fa-pause-circle');
    masterPlay.classList.remove('fa-play-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0)
        songIndex = 0;

    else
        songIndex -= 1;


    gif.style.opacity = 1;
    makeAllPlays();
    let ele = Array.from(document.getElementsByClassName('songItemPlay'));
    let x = ele[songIndex];
    x.classList.remove('fa-play-circle');
    x.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    currentSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.add('fa-pause-circle');
    masterPlay.classList.remove('fa-play-circle');
})