document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".announcements__list");
  // const slider2 = document.querySelector("#admissions-open");
  if (!slider) return;

  const contentWidth = slider.scrollWidth; // total width of all items
  // const contentWidth2 = slider2.scrollWidth;
  let x = 0;
  let baseSpeed = 1.0;
  let currentSpeed = baseSpeed;

  function animate() {
    x -= currentSpeed;

    // wrap using modulo so it never jumps visually
    if (-x >= contentWidth) {
      x += contentWidth;
    }

    slider.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(animate);

    // slider2.style.transform = `translateX(${x}px)`;
    // requestAnimationFrame(animate);
  }

  animate();

  const container = slider.parentElement; // the overflow-hidden div
  // const container2 = slider2.parentElement;

  container.addEventListener("mouseenter", () => {
    currentSpeed = 0; // pause smoothly
  });

  container.addEventListener("mouseleave", () => {
    currentSpeed = baseSpeed; // resume from same spot
  });
});
