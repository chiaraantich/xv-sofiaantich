const fechaEvento = new Date(2026, 4, 23, 21, 0, 0).getTime();

function dosDigitos(num) {
    return num < 10 ? "0" + num : num;
}

function actualizarCuenta() {
    const ahora = Date.now();
    const diferencia = fechaEvento - ahora;

    const diasElem = document.getElementById("dias");
    const horasElem = document.getElementById("horas");
    const minElem = document.getElementById("minutos");
    const segElem = document.getElementById("segundos");
    const mensajeFinal = document.getElementById("mensajeFinal");
    const timer = document.querySelector(".timer");

    if (diferencia <= 0) {
        mensajeFinal.classList.remove("oculto");
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    diasElem.textContent = dosDigitos(dias);
    horasElem.textContent = dosDigitos(horas);
    minElem.textContent = dosDigitos(minutos);
    segElem.textContent = dosDigitos(segundos);
}

setInterval(actualizarCuenta, 1000);
actualizarCuenta();