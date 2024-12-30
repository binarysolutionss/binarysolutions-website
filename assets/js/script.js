// JavaScript Document

//Smooth scroll for navigation link
document.querySelectorAll('a[href^="#').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});
//End of Smooth scroll for navigation link

// Script for the typescript effect on dev roles
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Development|", "Software Solutions|", "UI/UX Design|", "Mobile Apps|", "Graphic Design|", "Business Technology Development|"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});
// End of Script for the typescript effect on dev roles

// Nav Bar
let navBar = document.querySelector('.nav-bar .nav-options')

document.querySelector('#menu-btn').onclick=()=>{
    navBar.classList.add('active');
    //Restrict scrolling when menu is active
    document.documentElement.classList.add('no-scroll');
    document.body.classList.add('no-scroll');
}

document.querySelector('#close-navbar').onclick=()=>{
    navBar.classList.remove('active');
    //Allow scrolling when menu is closed
    document.documentElement.classList.remove('no-scroll');
    document.body.classList.remove('no-scroll');
}
//End of nav bar

// Lightbox for portfolio page
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const closeButton = document.querySelector('.close-lightbox');
    const lightboxImage = lightbox.querySelector('.lightbox-image');

    // Function to open lightbox
    function openLightbox(imageSrc) {
        lightboxImage.src = imageSrc;
        lightbox.style.display = 'flex';
        var x = event.clientX;
        var y = event.clientY;
        $('#lightbox').css({
            'position':'relative',
            'top': y + 'px',
            'left': x + 'px'
        });
        //Restrict scrolling when menu is active
        document.documentElement.classList.add('no-scroll');
        document.body.classList.add('no-scroll')
    }

    // Function to close lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
        lightboxImage.src = '';
        //Allow scrolling when menu is active
        document.documentElement.classList.remove('no-scroll');
        document.body.classList.remove('no-scroll')
    }

    // Add click event listeners to all portfolio images
    document.querySelectorAll('.portfolio-image').forEach(image => {
        image.addEventListener('click', function() {
            openLightbox(this.src);
        });
    });

    // Close lightbox when close button is clicked
    closeButton.addEventListener('click', closeLightbox);

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close lightbox when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });
});

// Loading page
// hide loading overlay and dhow body when page is loaded
document.addEventListener('DOMContentLoaded',()=>{
    const loadingOverlay=document.querySelector('.loading-overlay');

    loadingOverlay.style.display='none';
    document.body.style.overflow='auto';
});

// Intersction Observer for fade in effects

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Observe all elements with animate class
document.querySelectorAll('.animate').forEach((element) => {
    observer.observe(element);
});

// End of Intersction Observer for fade in effects

//ExpandabeFAQ page for Services Page
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        // Get the clicked FAQ item
        const clickedFaqItem = question.parentElement;
        
        // Get all FAQ items
        const allFaqItems = document.querySelectorAll('.faq-item');
        
        // Close all other FAQ items
        allFaqItems.forEach(faqItem => {
            if (faqItem !== clickedFaqItem && faqItem.classList.contains('active')) {
                faqItem.classList.remove('active');
            }
        });
        
        // Toggle the clicked FAQ item
        clickedFaqItem.classList.toggle('active');
    });
});
//End of ExpandabeFAQ page for Services Page

document.querySelectorAll('.faq-item').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        
        // Toggle active class
        faqItem.classList.toggle('active');
        
        // If opening the answer, scroll to it
        if (faqItem.classList.contains('active')) {
            // Wait for answer to display
            setTimeout(() => {
                answer.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }, 10);
        }
    });
});
