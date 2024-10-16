const productContainer = document.getElementById('product-container');
const preBtn = document.getElementById('pre-btn');
const nextBtn = document.getElementById('next-btn');

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
    productContainer.scrollBy({
        top: 0,
        left: 300, // Ajusta el valor según el ancho de las tarjetas
        behavior: 'smooth'
    });
});

preBtn.addEventListener('click', () => {
    productContainer.scrollBy({
        top: 0,
        left: -300, // Ajusta el valor según el ancho de las tarjetas
        behavior: 'smooth'
    });
});

function toggleDatos2() {
    const movil = document.getElementById('busqueda-movil-2');

    // Verificamos si los datos están ocultos o visibles
    if (movil.style.display === 'none' || movil.style.display === '') {
        // Si están ocultos, los mostramos
        movil.style.display = 'block';
    } else {
        // Si están visibles, los ocultamos
        movil.style.display = 'none';
    }
}



