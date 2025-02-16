
let currentSlide = 0;
let isPlaying = false;
let intervalId;

const mainCarousel = document.querySelector('.main-carousel-inner');
const dots = document.querySelectorAll('.dot');


const secondaryCarousel = document.querySelector('.secondary-carousel-inner');

function moveCarousels() {
    
    mainCarousel.style.transform = `translateX(-${currentSlide * 1010}px)`;
    
    
    secondaryCarousel.style.transform = `translateX(-${currentSlide * 437 * 3}px)`;
    
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % 10;
    moveCarousels();
}

function startAutoPlay() {
    intervalId = setInterval(nextSlide, 3000);
    document.querySelector('.play-pause').textContent = '⏸︎';
    isPlaying = true;
}

function stopAutoPlay() {
    clearInterval(intervalId);
    document.querySelector('.play-pause').textContent = '▶︎';
    isPlaying = false;
}


document.querySelector('.play-pause').addEventListener('click', () => {
    isPlaying ? stopAutoPlay() : startAutoPlay();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        moveCarousels();
        if(isPlaying) stopAutoPlay();
    });
});


moveCarousels();