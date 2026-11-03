
/* =================================
   BIRTHDAY LETTER
================================= */

function openLetter() {

    const letter = document.getElementById("letter-content");

    if (letter.classList.contains("hidden")) {
        letter.classList.remove("hidden");
    } else {
        letter.classList.add("hidden");
    }

}


/* =================================
   FINAL BIRTHDAY SURPRISE
================================= */

function showSurprise() {

    const surprise = document.getElementById("surprise");

    surprise.innerHTML = `
        🎂 HAPPY BIRTHDAY! 🎂
        <br><br>
        💜 You deserve all the happiness in the world! 💜
        <br>
        ✨ Keep shining and chasing your dreams! ✨
        <br><br>
        Sending you lots of love! ♡
    `;

    createConfetti();

}


/* =================================
   CONFETTI EFFECT
================================= */

function createConfetti() {

    const emojis = ["💜", "💗", "✨", "🎀", "🌸", "⭐"];

    for (let i = 0; i < 35; i++) {

        const confetti = document.createElement("span");

        confetti.innerHTML =
            emojis[Math.floor(Math.random() * emojis.length)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = "22px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";
        confetti.style.transition = "transform 3s linear, opacity 3s";

        document.body.appendChild(confetti);

        setTimeout(() => {

            confetti.style.transform =
                `translateY(${window.innerHeight + 100}px) rotate(360deg)`;

            confetti.style.opacity = "0";

        }, 50);

        setTimeout(() => {
            confetti.remove();
        }, 3200);

    }

}


/* =================================
   K-POP MUSIC PLAYER
================================= */

// SONG LIST

const songs = [
    { title: "Sour Grapes - LE SSERAFIM", file: "music/song1.mp3" },
    { title: "LIKEY - TWICE", file: "music/song2.mp3" },
    { title: "Super Shy - NewJeans", file: "music/song3.mp3" }
];


// CURRENT SONG

let currentSong = 0;


// GET HTML ELEMENTS

const audio = document.getElementById("audio-player");
const songTitle = document.getElementById("song-title");
const playButton = document.getElementById("play-button");


// LOAD SONG

function loadSong() {

    audio.src = songs[currentSong].file;

    songTitle.textContent = songs[currentSong].title;

}


// PLAY AND PAUSE

function togglePlay() {

    if (audio.paused) {

        audio.play()
            .then(() => {
                playButton.textContent = "⏸";
            })
            .catch(() => {
                alert("Unable to play this song. Please check your MP3 file.");
            });

    } else {

        audio.pause();

        playButton.textContent = "▶";

    }

}


// NEXT SONG

function nextSong() {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong();

    audio.play()
        .then(() => {
            playButton.textContent = "⏸";
        })
        .catch(() => {
            playButton.textContent = "▶";
        });

}


// PREVIOUS SONG

function previousSong() {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong();

    audio.play()
        .then(() => {
            playButton.textContent = "⏸";
        })
        .catch(() => {
            playButton.textContent = "▶";
        });

}


// AUTOMATICALLY PLAY NEXT SONG WHEN CURRENT SONG ENDS

audio.addEventListener("ended", nextSong);


// UPDATE PLAY BUTTON WHEN SONG IS PAUSED

audio.addEventListener("pause", () => {

    playButton.textContent = "▶";

});


// UPDATE PLAY BUTTON WHEN SONG STARTS

audio.addEventListener("play", () => {

    playButton.textContent = "⏸";

});


// LOAD FIRST SONG WHEN WEBSITE OPENS

loadSong();
