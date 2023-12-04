document.addEventListener("DOMContentLoaded", function () {
    // Nascondi la sezione dei contatti inizialmente
    var contactSection = document.getElementById("contact");
    contactSection.style.display = "none";

    // Aggiungi un gestore di eventi al link del menu di navigazione per mostrare la sezione dei contatti
    var contactLink = document.querySelector('a[href="#contact"]');
    contactLink.addEventListener("click", function (event) {
      event.preventDefault();
      contactSection.style.display = "block";

      // Nascondi le altre sezioni, se necessario
      var otherSections = document.querySelectorAll("main > section");
      otherSections.forEach(function (section) {
        if (section !== contactSection) {
          section.style.display = "none";
        }
      });
    });
  });