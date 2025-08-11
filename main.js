// Control del Video Hero
const heroVideo = document.getElementById('heroVideo');

// Intentar autoplay (algunos navegadores bloquean autoplay sin interacción del usuario)
document.addEventListener('DOMContentLoaded', () => {
    const playPromise = heroVideo.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            // Mostrar botón de play si el autoplay falla
            const playButton = document.createElement('button');
            playButton.innerHTML = '<i class="fas fa-play"></i>';
            playButton.className = 'video-play-btn';
            playButton.addEventListener('click', () => {
                heroVideo.play();
                playButton.remove();
            });
            document.querySelector('.hero').appendChild(playButton);
        });
    }
});

// Pausar video cuando no es visible (para mejorar rendimiento)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            heroVideo.play();
        } else {
            heroVideo.pause();
        }
    });
}, { threshold: 0.5 });

observer.observe(heroVideo);

// Preload audio samples for better user experience
function preloadAudio() {
    const audioFiles = [
        'audio-sample-1.mp3',
        'audio-sample-2.mp3',
        'audio-sample-3.mp3',
        'track-1.mp3',
        'track-2.mp3',
        'track-3.mp3',
        'track-4.mp3',
        'track-5.mp3',
        'track-6.mp3'
    ];
    
    audioFiles.forEach(audio => {
        new Audio(audio);
    });
}

// Call preload after DOM is loaded
document.addEventListener('DOMContentLoaded', preloadAudio);