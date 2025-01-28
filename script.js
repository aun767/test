// Select toggle button and navigation menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');

// Function to show the clicked section and hide others
function showSection(event) {
    event.preventDefault(); // Prevent default link behavior

    // Get the target section ID from the clicked link
    const targetSection = event.target.getAttribute('data-section');

    // Loop through all sections
    sections.forEach(section => {
        if (section.id === targetSection) {
            section.classList.add('active'); // Show the target section
        } else {
            section.classList.remove('active'); // Hide others
        }
    });
}

// Function to toggle the menu visibility on small screens
function toggleMenu() {
    navMenu.classList.toggle('active');
}

// Add click event listener to toggle the menu
menuToggle.addEventListener('click', toggleMenu);

// Add click event listeners to all navigation links
navLinks.forEach(link => {
    link.addEventListener('click', showSection);
});
