function CloseMenu() {
    document.querySelector('#menu').classList.remove("menu_open");
}
function OpenMenu() {
    document.querySelector('#menu').classList.add("menu_open");
}

document.querySelector('.btnMenu_open').addEventListener('click', function () {
    OpenMenu()
});
document.querySelector('.btnMenu_Close').addEventListener('click', function () {
    CloseMenu()
});

function AboutUs() {
    let AboutUs = document.querySelector('#AboutUsDiv')
    let Carte = document.querySelector('#CarteDiv')

    if (AboutUs.classList.contains("invisible")) {
        AboutUs.classList.remove("invisible");
        AboutUs.classList.add("visible");
        Carte.classList.add("invisible");
        Carte.classList.remove("visibleCarte");
    }
    CloseMenu()
}

document.querySelector('#AboutUsMenu').addEventListener('click', function () {
    AboutUs()
});

function Carte(){
    let AboutUs = document.querySelector('#AboutUsDiv')
    let Carte = document.querySelector('#CarteDiv')

    if (AboutUs.classList.contains("visible")) {
        AboutUs.classList.add("invisible");
        AboutUs.classList.remove("visible");
        Carte.classList.remove("invisible");
        Carte.classList.add("visibleCarte");
    }
    CloseMenu()
}

document.querySelector('#CarteMenu').addEventListener('click', function () {
    Carte()
});



document.querySelectorAll('.nav a[href^="#"]').forEach(function(element) {
    element.addEventListener('click', function(e) {
        e.preventDefault();
        var id = this.getAttribute('href');
        var targetOffset = document.querySelector(id).offsetTop;

        window.scrollTo({
            top: targetOffset - 100,
            behavior: 'smooth'
        });
    });
});
