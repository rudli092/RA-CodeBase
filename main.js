const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector(".navbar");

feather.replace();

/* SHOW NAVBAR AFTER LOAD */
window.addEventListener("load", () => {
  navbar.classList.add("show");
});

/* SCROLL EFFECT */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* UPDATE ICON FUNCTION (FIX STABILITY FEATHER ICON) */
function updateIcon() {
  const icon = navLinks.classList.contains("active") ? "x" : "menu";
  menuToggle.innerHTML = `<i data-feather="${icon}"></i>`;
  feather.replace();
}

/* TOGGLE MENU */
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();

  navLinks.classList.toggle("active");
  updateIcon();
});

/* CLOSE MENU WHEN CLICKING NAV LINK */
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    updateIcon();
  });
});

/* CLOSE MENU WHEN CLICK OUTSIDE (FIX #3) */
document.addEventListener("click", (e) => {
  const isClickInsideMenu = navLinks.contains(e.target);
  const isClickToggle = menuToggle.contains(e.target);

  if (!isClickInsideMenu && !isClickToggle) {
    if (navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      updateIcon();
    }
  }
});
