document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('backgroundAudio');
    audio.play().catch(error => {
        console.error('Autoplay was prevented:', error);
    });
});
