const cancion = new Audio();
const video = document.getElementById('mili');

cancion.src = '/audio/Cómo Te Extraño Mi Amor.mp3';
cancion.play()

video.addEventListener('play', () => {
    cancion.pause()
});

video.addEventListener('pause', () => {cancion.play()})