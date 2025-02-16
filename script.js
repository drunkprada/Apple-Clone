// Carousel Functionality
const mainCarousel = document.querySelector(".main-carousel .carousel-inner");
const secondaryCarousel = document.querySelector(".secondary-carousel .carousel-inner");
const dots = document.querySelectorAll(".dot");
const playPauseButton = document.querySelector(".carousel-arrow.play-pause");

let currentSlide = 0;
let isPlaying = false;
let interval;

// Function to move to a specific slide
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    const offset = -currentSlide * 100;
    mainCarousel.style.transform = `translateX(${offset}%)`;
    secondaryCarousel.style.transform = `translateX(${offset}%)`;

    // Update active dot
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

// Function to start the carousel flow
function startCarousel() {
    interval = setInterval(() => {
        currentSlide = (currentSlide + 1) % 5; // Loop back to 0 after slide 5
        goToSlide(currentSlide);
    }, 3000); // Adjust slide transition speed (3 seconds)
    isPlaying = true;
    playPauseButton.textContent = "❚❚"; // Pause icon
}

// Function to pause the carousel flow
function pauseCarousel() {
    clearInterval(interval);
    isPlaying = false;
    playPauseButton.textContent = "►"; // Play icon
}

// Event listener for play/pause button
playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        pauseCarousel();
    } else {
        startCarousel();
    }
});

// Event listeners for navigation dots
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        pauseCarousel();
        goToSlide(index);
    });
});

// Initialize the first slide
goToSlide(0);