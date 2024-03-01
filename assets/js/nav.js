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




// function isInViewport(element) {
//     var rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

//   // Function to update the progress bars when they appear in the viewport
// function updateProgressBars() {
//     var progressBars = document.querySelectorAll('.progress-bar');
//     progressBars.forEach(function(progressBar) {
//         if (isInViewport(progressBar)) {
//             var skillPercentage = parseInt(progressBar.parentNode.previousElementSibling.querySelector('.skill-percentage').textContent);
//             progressBar.style.width = skillPercentage + '%';
//         }
//     });
// }


// function throttle(func, delay) {
//     let lastScroll = 0;
//     return function() {
//         const currentScroll = window.scrollY;
//         if (currentScroll - lastScroll < delay) {
//             return;
//        }
//        lastScroll = currentScroll;
//        func.apply(this, arguments);
//     };
// }


// window.addEventListener('scroll', throttle(updateProgressBars, 100));
// window.addEventListener('resize', throttle(updateProgressBars, 100));

// updateProgressBars();