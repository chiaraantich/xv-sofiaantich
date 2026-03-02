const audio = document.getElementById("reproductor");
const boton = document.getElementById("audio-control");
const icono = document.getElementById("icono-audio");

audio.volume = 0.2;

// Iniciar música al primer click en la página
document.addEventListener("click", function iniciarAudio() {
    audio.play();
    document.removeEventListener("click", iniciarAudio);
});

// Botón mute/unmute
boton.addEventListener("click", function() {
    if (audio.muted) {
        audio.muted = false;
        icono.src = "imagenes/iconoaudioon.png";
    } else {
        audio.muted = true;
        icono.src = "imagenes/iconoaudiooff.png";
    }
});

// Pausar cuando el usuario sale de la pestaña
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        audio.pause();
    } else {
        if (!audio.muted) {
            audio.play();
        }
    }
});