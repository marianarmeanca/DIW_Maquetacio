
const video = document.getElementById("id-video");
const btnPlay = document.getElementById("btn-play");
const btnMute = document.getElementById("btn-mute");
const navbar = document.querySelector(".navbar"); 

// EXERCICI 4
function play_pause() {
    if (video.paused) {
        video.play();
        btnPlay.innerText = "pause_circle"; 
    } else {
        video.pause();
        btnPlay.innerText = "play_circle";
    }
}

function mute() {
    if (video.muted) {
        video.muted = false;
        btnMute.innerText = "volume_up";
    } else {
        video.muted = true;
        btnMute.innerText = "volume_off"; 
    }
}

// EXERCICI 5
window.onscroll = function() {
    controlScroll();
};

function controlScroll() {
   
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }

  
    const posicioVideo = video.getBoundingClientRect().top;
    const alçadaPantalla = window.innerHeight;

  
    if (posicioVideo < alçadaPantalla && posicioVideo > 0) {
        if (video.paused) {
            video.play();
            btnPlay.innerText = "pause_circle";
        }
    }
}
