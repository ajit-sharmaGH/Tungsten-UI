const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');


    });
};
navSlide();


// if (nav.style.display == "block") {
//     nav.style.display = "none";

// } else { nav.style.display = "block"; }