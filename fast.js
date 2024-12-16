// Get all the menu-option links
const menuOptionLinks = document.querySelectorAll('.menu-option');

// Get all the menu-content elements
const menuContent = document.querySelectorAll('.menu-content');

// Add click event listeners to each menu-option link
menuOptionLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        // Hide all menu-content elements
        menuContent.forEach(content => {
            content.classList.remove('active');
        });

        // Show the corresponding menu-content element based on the index
        menuContent[index].classList.add('active');
    });
  });

var loadingScreen = document.querySelector(".loadingscreen");
window.addEventListener('load', function() {
    loadingScreen.style.display = 'none';
  })