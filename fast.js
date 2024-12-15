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

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}

var loadingScreen = document.querySelector(".loadingscreen");
window.addEventListener('load', function() {
    loadingScreen.style.display = 'none';
  })