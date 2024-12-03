let currentIndex = 0;
const images = document.querySelector('.carousel-images');
const totalImages = images.children.length;
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

function updateCarousel() {
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
}

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});