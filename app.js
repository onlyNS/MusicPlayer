const image = document.querySelector('#image');
const audio = document.querySelector('#audio');
const title = document.querySelector('.card-body .card-title');
const singer = document.querySelector('.card-body .card-text');
const play = document.querySelector('#controls #play');
const next = document.querySelector('#controls #next');
const previous = document.querySelector('#controls #previous');
const volumeicon = document.querySelector('#volumeicon');
const volume = document.querySelector('#volume');
const currentTime = document.querySelector('#currentTime');
const totalTime = document.querySelector('#totalTime');
const timeProgress = document.querySelector('#time-progress');
const ul = document.querySelector('.dropdown-menu');
const dropdownItem = document.querySelector(".dropdown-item");


const music = new MusicPlayer(musicList);


window.addEventListener('load',() => {
    image.src = 'img/' + music.getMusic().img;
    title.innerText = music.getMusic().title;
    singer.innerText = music.getMusic().singer;
    audio.src = 'mp3/' + music.getMusic().files;
});





let playMusic = false;
play.addEventListener('click', () => {
    if (playMusic == false){
        audio.play();
        play.classList = 'fa-solid fa-circle-pause fs-1 text-primary';
        playMusic = true;
    }else{
        audio.pause();
        play.classList = 'fa-solid fa-circle-play fs-1 text-primary';
        playMusic = false;
    };
    audio.volume = volume.value;
});

next.addEventListener('click', () => {
    music.next();
    displayMusic();

});

previous.addEventListener('click', () => {
    music.previous();
    displayMusic();
})

volume.addEventListener('change', () => {
    audio.volume = volume.value;
})

let audioMuted = false;
volumeicon.addEventListener('click', () => {
    if(audioMuted == false){
        volumeicon.classList = 'fa-solid fa-volume-xmark text-primary';
        audio.volume = 0;
        volume.value = 0;
        audioMuted = true;
    }else {
        volumeicon.classList = 'fa-solid fa-volume-high text-primary';
        audio.volume = 1;
        volume.value = 1;
        audioMuted = false;
    }
    
})

audio.addEventListener("loadedmetadata", () => {
    totalTime.innerHTML = convertTime(audio.duration);
    timeProgress.setAttribute('max', audio.duration);
})

audio.addEventListener('timeupdate', () => {
    currentTime.innerHTML = convertTime(audio.currentTime);
    timeProgress.value = audio.currentTime;
    
})

let skipCurrenTimeMusic = () => audio.currentTime = timeProgress.value;

function convertTime(time) {
    let mins = Math.floor(time / 60);
    if (mins < 10) {
      mins = '0' + String(mins);
    }
    let secs = Math.floor(time % 60);
    if (secs < 10) {
      secs = '0' + String(secs);
    }

    return mins + ':' + secs;
}

function displayMusic(){
    image.src = 'img/'+ music.getMusic().img;
    title.innerText = music.getMusic().title;
    singer.innerText = music.getMusic().singer;
    audio.src = 'mp3/' + music.getMusic().files;
}

