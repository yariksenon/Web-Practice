// Массив с изображениями
const images = [
    "../Image/Taste1.svg",
    "../Image/Taste2.svg",
    "../Image/Taste3.svg"
    // Добавьте здесь другие изображения
];

// Инициализация
let currentIndex = 0;

// Получение элементов
const sliderImage = document.getElementById('slider-image');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

// Обновление изображения
function updateImage() {
    sliderImage.src = images[currentIndex];
}

// Обработчики событий для кнопок
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});
