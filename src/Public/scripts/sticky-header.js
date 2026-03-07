document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("hero__content");
  if (!header) return;

  const primary_nav = document.getElementById("primary-nav");
  const navTop = primary_nav.offsetTop;
  let lastScrollY = window.scrollY;
  const STICKY_OFFSET = 700;
  const delta = 5; // dead zone to prevent jitter

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > STICKY_OFFSET) {
      header.classList.add("is-sticky");
    }

    if (currentScrollY <= navTop) {
      header.classList.remove("is-sticky");
    }
  });
});
