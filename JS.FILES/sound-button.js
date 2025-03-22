let audio = new Audio('./audios/c.mp3');
audio.loop = true;  
audio.volume = 0.5;  

let soundButton = document.querySelector(".sound-button");
let isPlaying = false;
let isMuted = false;

soundButton.addEventListener("click", function() {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
    } else {
        if (isMuted) {
            audio.muted = false;
            isMuted = false;
        } else {
            audio.muted = true;
            isMuted = true;
        }
    }
});
