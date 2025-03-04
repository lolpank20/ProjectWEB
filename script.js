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