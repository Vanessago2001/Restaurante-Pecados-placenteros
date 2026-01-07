const carousel = document.getElementById('carouselInfinito');
let scrollPosition = 0;
let pausado = false;
const scrollSpeed = 1; // Velocidad de desplazamiento

function autoScroll() {
    if (!pausado) {
        scrollPosition += scrollSpeed;
        carousel.style.transform = `translateX(-${scrollPosition}px)`;

    }
    requestAnimationFrame(autoScroll);
}

// Inicia el scroll automático
autoScroll();

// Pausa el scroll al pasar el mouse
carousel.addEventListener('mouseenter', () => {
    pausado = true;
});

carousel.addEventListener('mouseleave', () => {
    pausado = false;
});