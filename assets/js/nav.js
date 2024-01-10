const t = document.getElementById('navtitle');
document.querySelector('.navbar-toggler').addEventListener ("click", function () {
    t.style.display = this.getAttribute("aria-expanded") === "true" ? "none" : "block" ;
});
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const targetId = link.getAttribute('href'); // Get the target section's ID
        const targetSection = document.querySelector(targetId); // Find the target section element
        const navbarHeight = document.querySelector('nav').offsetHeight;
        const targetOffset = targetSection.offsetTop - navbarHeight;

        // Scroll smoothly to the target section with offset
        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });

        // Code to close the toggle navigation
        const navbarToggle = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        navbarCollapse.classList.remove('show');
    });
});


document.getElementById("currentYear").innerHTML = new Date().getFullYear();


document.addEventListener("DOMContentLoaded", function (event) {
    scrollRevelation('.card');
});
