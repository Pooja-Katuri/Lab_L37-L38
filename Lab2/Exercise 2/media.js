// Get all elements
const audio = document.getElementById("myAudio");
const video = document.getElementById("myVideo");
const audioTimeSpan = document.getElementById("audioTime");
const videoTimeSpan = document.getElementById("videoTime");

// Audio control buttons
const playAudioBtn = document.getElementById("playAudio");
const pauseAudioBtn = document.getElementById("pauseAudio");

// Video control buttons
const playVideoBtn = document.getElementById("playVideo");
const pauseVideoBtn = document.getElementById("pauseVideo");

// Format time to two decimal places
function formatTime(t) {
    return t.toFixed(2);
}

// Audio controls
playAudioBtn.addEventListener("click", () => {
    audio.play();
});

pauseAudioBtn.addEventListener("click", () => {
    audio.pause();
});

// Video controls
playVideoBtn.addEventListener("click", () => {
    video.play();
});

pauseVideoBtn.addEventListener("click", () => {
    video.pause();
});

// Update audio time display dynamically
audio.addEventListener("timeupdate", () => {
    audioTimeSpan.textContent = formatTime(audio.currentTime);
});

// Update video time display dynamically
video.addEventListener("timeupdate", () => {
    videoTimeSpan.textContent = formatTime(video.currentTime);
});
