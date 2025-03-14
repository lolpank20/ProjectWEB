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

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Ajustar para que no quede cubierto por el navbar
                behavior: 'smooth'
            });
        }
    });
});

// Detectar y aplicar animaciones al hacer scroll
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


// GRAFICO PIE
document.addEventListener("DOMContentLoaded", function() {
    let ctx = document.getElementById('skillsChart').getContext('2d');

    let skillsChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Python', 'JavaScript', 'SQL', 'Node.js', 'HTML & CSS', 'Power BI', 'AWS'],
            datasets: [{
                data: [70, 65, 60, 50, 80, 75, 55], // Valores en porcentaje
                backgroundColor: [
                    '#00FF99', '#FF5733', '#33B5E5', '#FFEB3B', '#4CAF50', '#FF9800', '#9C27B0'
                ],
                borderWidth: 2,
                hoverOffset: 15 
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'white'
                    }
                }
            },
            animation: {
                animateScale: true
            }
        }
    });
});

// Animación de elementos al hacer scroll
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.fade-in');

    function revealOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.85) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});


// Efecto Parallax en el Hero
window.addEventListener("scroll", function() {
    let hero = document.getElementById("hero");
    let scrollPosition = window.scrollY;
    hero.style.backgroundPositionY = scrollPosition * 0.3 + "px";
});


// Botón para volver arriba
document.addEventListener("DOMContentLoaded", function() {
    const scrollTopButton = document.getElementById("scrollTop");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 500) {
            scrollTopButton.style.opacity = "1";
            scrollTopButton.style.pointerEvents = "auto";
        } else {
            scrollTopButton.style.opacity = "0";
            scrollTopButton.style.pointerEvents = "none";
        }
    });

    scrollTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


// Función para alternar entre barras y gráfico
function showTab(tab) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

    document.getElementById(tab).classList.add('active');
    document.querySelector(`[onclick="showTab('${tab}')"]`).classList.add('active');
}

// Mostrar por defecto las barras
document.addEventListener("DOMContentLoaded", function() {
    showTab('bars');
});


// Función para alternar entre barras y gráfico con transición suave
function showTab(tab) {
    document.querySelectorAll('.tab-content').forEach(el => {
        if (el.id !== tab) {
            el.classList.remove('active');
            setTimeout(() => { 
                el.style.display = "none"; 
            }, 500); 
        }
    });

    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

    let selectedTab = document.getElementById(tab);
    selectedTab.style.display = "block"; 
    setTimeout(() => selectedTab.classList.add('active'), 50); 

    document.querySelector(`[onclick="showTab('${tab}')"]`).classList.add('active');
}
document.addEventListener("DOMContentLoaded", function() {
    showTab('bars');
});

