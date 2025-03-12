document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("loaded");

    
    const changeInfoBtn = document.getElementById("change-info-btn");
    const description = document.querySelector(".description");
    const infoElements = document.querySelectorAll(".info");

    changeInfoBtn.addEventListener("click", function() {
      
        description.textContent = "Soy un apasionado por los videojuegos y la tecnología, deonde la programación es algo fundamental para mi vida.";

        infoElements[0].textContent = "Bienvenido a mi mundo gamer";
        infoElements[1].textContent = "Estudiante de la Universidad EAN y gamer";
        infoElements[4].textContent = "Edad: 21 años (proximamente 22)";

        alert("¡Los cambios fueron realizados con éxito!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    function checkFadeIn() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkFadeIn);
    checkFadeIn();
});



// Menu de navegación
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50, 
            behavior: 'smooth'
        });
    });
});
