const elementos = document.querySelectorAll(".animar");

const mostrarElemento = () => {
    const alturaPantalla = window.innerHeight;

    elementos.forEach(el => {
        const posicion = el.getBoundingClientRect().top;

        if (posicion < alturaPantalla - 50) {
            el.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", mostrarElemento);
window.addEventListener("load", mostrarElemento);