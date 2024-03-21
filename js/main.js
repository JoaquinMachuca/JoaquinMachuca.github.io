const cancion = new Audio();
const video = document.getElementById('mili');



document.addEventListener('load', () => {
    cancion.src = '/audio/Cómo Te Extraño Mi Amor.mp3';
    cancion.play()
})

video.addEventListener('play', () => {
    cancion.pause()
});

video.addEventListener('pause', () => {cancion.play()})