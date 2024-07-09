document.addEventListener("DOMContentLoaded", function () {
    const dynamicText = document.getElementById("dynamic-text");
    const words = ["Business Analyst", "Blogger", "Reader", "Thinker"];
    let wordIndex = 0;
    let charIndex = 0;
    let isErasing = false;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetweenWords = 2000;

    function typeText() {
        if (!isErasing && charIndex < words[wordIndex].length) {
            dynamicText.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else if (isErasing && charIndex > 0) {
            dynamicText.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeText, erasingSpeed);
        } else if (!isErasing && charIndex === words[wordIndex].length) {
            isErasing = true;
            setTimeout(typeText, delayBetweenWords);
        } else if (isErasing && charIndex === 0) {
            isErasing = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeText, typingSpeed);
        }
    }

    typeText();

    const prev = document.querySelector(".carousel-control.prev");
    const next = document.querySelector(".carousel-control.next");
    const carouselInner = document.querySelector(".carousel-inner");
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prev.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default action
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    next.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default action
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
});

const navbarLinks = document.querySelectorAll('nav ul li a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    

