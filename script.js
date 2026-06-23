// Menu Mobile
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Form Kontak
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    alert("Pesan berhasil dikirim!");

    form.reset();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior:"smooth"
        });
    });
});