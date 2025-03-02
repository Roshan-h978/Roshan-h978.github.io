// script.js
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    
    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ffcc00";
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "white";
        });
    });
});
