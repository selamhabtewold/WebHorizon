const containerEl = document.querySelector(".container");
const btnEl = document.querySelector(".hero-img-btn");
const contactForm = document.querySelector(".contact-form");
const closeIcon = document.querySelector(".close");


btnEl.addEventListener("click", () => {
    
    containerEl.classList.add('active');

    contactForm.classList.remove("active");
    btnEl.style.animationPlayState = 'paused';


});


closeIcon.addEventListener("click", () => {
    containerEl.classList.remove("active");
    contactForm.classList.add("active");
    btnEl.style.animationPlayState = 'running';


});

// const backgrounds = [
//     'https://images.pexels.com/photos/5217774/pexels-photo-5217774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     'https://images.pexels.com/photos/2904046/pexels-photo-2904046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
// ];

// let currentIndex = 0;

// function changeBackground() {
//     currentIndex = (currentIndex + 1) % backgrounds.length; // Increment index
//     const section = document.getElementById('backgroundSection');
//     section.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${backgrounds[currentIndex]})`;
// }

// // Change background automatically every 5 seconds
// setInterval(changeBackground, 5000);