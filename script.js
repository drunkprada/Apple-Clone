// Carousel Functionality
const mainCarousel = document.querySelector(".main-carousel .carousel-inner");
const secondaryCarousel = document.querySelector(".secondary-carousel .carousel-inner");
const dots = document.querySelectorAll(".dot");
const playPauseButton = document.querySelector(".carousel-arrow.play-pause");

let currentSlide = 0;
let isPlaying = false;
let interval;


function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    const offset = -currentSlide * 100;
    mainCarousel.style.transform = `translateX(${offset}%)`;
    secondaryCarousel.style.transform = `translateX(${offset}%)`;

    
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}


function startCarousel() {
    interval = setInterval(() => {
        currentSlide = (currentSlide + 1) % 5; 
        goToSlide(currentSlide);
    }, 3000); 
    isPlaying = true;
    playPauseButton.textContent = "❚❚"; 
}


function pauseCarousel() {
    clearInterval(interval);
    isPlaying = false;
    playPauseButton.textContent = "►"; 
}


playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        pauseCarousel();
    } else {
        startCarousel();
    }
});


dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        pauseCarousel();
        goToSlide(index);
    });
});


goToSlide(0);


const secondaryCarouselInner = document.querySelector(".secondary-carousel .carousel-inner");
let secondaryCurrentSlide = 0;
const secondarySlideWidth = 150; 
const secondarySlidesPerView = 3; 


function moveSecondaryCarousel() {
    secondaryCurrentSlide = (secondaryCurrentSlide + 1) % (secondaryCarouselInner.children.length - secondarySlidesPerView + 1);
    const offset = -secondaryCurrentSlide * secondarySlideWidth;
    secondaryCarouselInner.style.transform = `translateX(${offset}px)`;
}


function syncSecondaryCarousel() {
    moveSecondaryCarousel();
}

playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        pauseCarousel();
    } else {
        startCarousel();
    }
    syncSecondaryCarousel(); 
});


syncSecondaryCarousel();