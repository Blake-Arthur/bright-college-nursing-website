document.addEventListener("DOMContentLoaded", () => {
  const goTop = document.querySelector(".go-top");
  const SHOW_AFTER = 300; // px scrolled

  window.addEventListener("scroll", () => {
    if (window.scrollY > SHOW_AFTER) {
      goTop.classList.add("show");
    } else {
      goTop.classList.remove("show");
    }
  });

  goTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
