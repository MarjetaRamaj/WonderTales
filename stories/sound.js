window.onload = () => {
    const pageSound = document.getElementById("page-sound");
    const playButton = document.getElementById("play-button");

    // Function to toggle audio playback
    function toggleAudio() {
        if (pageSound.paused) {
            pageSound.play().catch(error => {
                console.log('Playback failed:', error);
            });
            playButton.textContent = "Pause Audio";
        } else {
            pageSound.pause();
            playButton.textContent = "Play Audio";
        }
    }

    // Event listener to start/pause audio playback when the button is clicked
    playButton.addEventListener('click', () => {
        toggleAudio();
    });
};
