document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".accordion-display");
  const item = document.querySelectorAll(".accordion-item");

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("active");
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("active");
    });
  });
});
