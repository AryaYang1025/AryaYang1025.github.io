let currentPlayingCD = null;

function toggleMusic(cdElement, musicFile) {
    const audio = document.getElementById('audio-player');

    if (currentPlayingCD === cdElement) {
        audio.pause();
        currentPlayingCD.classList.remove('playing');
        currentPlayingCD = null;
        return;
    }

    if (currentPlayingCD) {
        currentPlayingCD.classList.remove('playing');
    }

    currentPlayingCD = cdElement;
    currentPlayingCD.classList.add('playing');
    audio.src = musicFile;
    audio.play();
}