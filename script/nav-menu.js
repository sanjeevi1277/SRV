const toggleButton = document.querySelector('.toggle-button');
const closeButton = document.querySelector('.close-button');
const mobileNav = document.querySelector('nav ul');
const navItem = document.querySelectorAll('li a');

const Display = () => {
    mobileNav.style.display = 'block';
    closeButton.style.display = 'block';
};

const Close = () => {
    mobileNav.style.display = 'none';
    closeButton.style.display = 'none';
}

// When pressed toggle button then mobile navmenu should appear
toggleButton.addEventListener('click', () => {
    Display();
});

// When pressed clicked on close button, the mobile navmenu should disappear

closeButton.addEventListener('click', () => {
    Close();
});

// When clicked on navitems the mobile navmenu should close;
// Attach click event listeners to each nav item
navItem.forEach(navItem => {
    navItem.addEventListener('click', () => {
        if (window.innerWidth < 876) // Adjust the breakpoint as needed
            Close();
    });
});


let slideIndex = 0;
let slideTimeout;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    // slideTimeout = setTimeout(showSlides, 5000); // Change every 5 seconds
}

function plusSlides(n) {
    clearTimeout(slideTimeout); // Stop automatic transition temporarily
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex += n;
    if (slideIndex < 1) { slideIndex = slides.length; }
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    // slideTimeout = setTimeout(showSlides, 5000); // Restart timer after manual change
}

showSlides();