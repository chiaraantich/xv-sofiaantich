const modal = document.getElementById('modal');
    const botonAbrir = document.getElementById('abrirmodal');
    const botonCerrar = document.querySelector('.cerrar');

    botonAbrir.onclick = () => modal.style.display = 'flex';
    botonCerrar.onclick = () => modal.style.display = 'none';

    // Cierra si clickeás afuera de la ventanita
    window.onclick = (e) => {
        if (e.target === modal) modal.style.display = 'none';
    }