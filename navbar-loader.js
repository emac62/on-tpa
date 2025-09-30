// navbar-loader.js
// Loads the navbar.html into the #navbar element on the page

document.addEventListener("DOMContentLoaded", function () {
  var navbarContainer = document.getElementById("navbar");
  if (navbarContainer) {
    fetch("navbar.html")
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        navbarContainer.innerHTML = data;
        // Optionally, set the active link based on the current page
        var links = navbarContainer.querySelectorAll(".nav-link");
        links.forEach(function (link) {
          if (window.location.pathname.endsWith(link.getAttribute("href"))) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      });
  }
});
