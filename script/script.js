let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");

function updateNavButtons() {
    let prevIndex = (slideIndex - 1 + slides.length) % slides.length;
    let nextIndex = (slideIndex + 1) % slides.length;

    prevBtn.style.backgroundImage = `url(${slides[prevIndex].getElementsByTagName('img')[0].src})`;
    nextBtn.style.backgroundImage = `url(${slides[nextIndex].getElementsByTagName('img')[0].src})`;
}

function showSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
    slideIndex = n;
    updateNavButtons();

    // Get all text elements in the current slide
    const textElements = slides[n].querySelectorAll('.text h2, .text p');
    
    // Apply typewriter effect to each text element with slight delay between them
    textElements.forEach((element, index) => {
        const originalText = element.textContent;
        setTimeout(() => {
            typeWriter(element, originalText);
        }, index * 1000); // 1 second delay between each text element
    });
}

function showNextSlide() {
    let nextIndex = (slideIndex + 1) % slides.length;
    showSlide(nextIndex);
}

function showPrevSlide() {
    let prevIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

function autoSlideShow() {
    showNextSlide();
    setTimeout(autoSlideShow, 10000); // Change slide every 10 seconds
}

// Initialize first slide and buttons
showSlide(0);
setTimeout(autoSlideShow, 10000);

function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".menu ul li a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("active");
}));

// Handle dropdown toggle on mobile
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});