// NAVIGATION
const burgerNav = document.querySelector('#burger-nav');
const burgerNavOpen = document.querySelector('#burger-nav-btn-ouvrir');
const burgerNavClose = document.querySelector('#burger-nav-btn-fermer');
const burgerNavClick = document.querySelectorAll('.burger-nav-link');

burgerNavOpen.addEventListener('click', () => {
    burgerNav.style.display = "block";
})

burgerNavClose.addEventListener('click', () => {
    burgerNav.style.display = "none";
})

burgerNavClick.forEach(e => {
    e.addEventListener('click', () => {
        burgerNav.style.display = "none";
    })
})



// À PROPOS
const smallDescriptionBtn = document.querySelector('#small-description-btn');
const mediumDescriptionBtn = document.querySelector('#medium-description-btn');
const largeDescriptionBtn = document.querySelector('#large-description-btn');

const smallDescription = document.querySelector('#small-description');
const mediumDescription = document.querySelector('#medium-description');
const largeDescription = document.querySelector('#large-description');

function removeSmall(){
    smallDescription.style.display = "none";
    smallDescriptionBtn.classList.add("fa-regular");
    smallDescriptionBtn.classList.remove("fa-solid");
};

function removeMedium() {
    mediumDescription.style.display = "none";
    mediumDescriptionBtn.classList.add("fa-regular");
    mediumDescriptionBtn.classList.remove("fa-solid");
};

function removeLarge() {
    largeDescription.style.display = "none";
    largeDescriptionBtn.classList.add("fa-regular");
    largeDescriptionBtn.classList.remove("fa-solid");
};

smallDescriptionBtn.addEventListener('click', () => {
    smallDescription.style.display = "block";
    smallDescriptionBtn.classList.add("fa-solid");

    removeMedium();
    removeLarge();
});

mediumDescriptionBtn.addEventListener('click', () => {
    mediumDescription.style.display = "block";
    mediumDescriptionBtn.classList.add("fa-solid");

    removeSmall();
    removeLarge();
});

largeDescriptionBtn.addEventListener('click', () => {
    largeDescription.style.display = "block";
    largeDescriptionBtn.classList.add("fa-solid");

    removeSmall();
    removeMedium();
});

window.addEventListener("resize", () => {
    if(window.innerWidth < 1024){
        mediumDescription.style.display = "block";
        mediumDescriptionBtn.classList.add("fa-solid");
        
        removeSmall();
        removeLarge();
    }
})