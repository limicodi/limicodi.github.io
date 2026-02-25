// Active navigation highlighting based on scroll position
document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".greedy-nav a");

  function updateActiveNav() {
    var scrollPos = window.scrollY + 100; // offset for sticky header

    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      var sectionId = section.getAttribute("id");

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          link.classList.remove("active-section");
          if (link.getAttribute("href") === "/#" + sectionId) {
            link.classList.add("active-section");
          }
        });
      }
    });

    // If scrolled to bottom, activate last section
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
      navLinks.forEach(function (link) {
        link.classList.remove("active-section");
      });
      var lastSection = sections[sections.length - 1];
      if (lastSection) {
        var lastId = lastSection.getAttribute("id");
        navLinks.forEach(function (link) {
          if (link.getAttribute("href") === "/#" + lastId) {
            link.classList.add("active-section");
          }
        });
      }
    }
  }

  window.addEventListener("scroll", updateActiveNav);
  updateActiveNav(); // run on page load
});
