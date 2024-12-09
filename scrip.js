// Animação para mostrar imagens
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".image-gallery img, .pet-images-container img");
    setTimeout(() => {
        images.forEach(img => {
            img.classList.add("show");
        });
    }, 300); // Adiciona a classe 'show' após um pequeno atraso para o efeito
});