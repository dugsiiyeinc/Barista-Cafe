
// Select elements
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.getElementById('list-item-container');

// Event listener to toggle burger menu and show/hide navigation links
burgerMenu.addEventListener('click', function() {
    // Toggle the active class to animate the burger into a cross
    burgerMenu.classList.toggle('active');
    
    // Toggle the visibility of the navigation links
    navLinks.classList.toggle('show');
});
