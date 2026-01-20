document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".announce-slider");
  if (!slider) return;

  const contentWidth = slider.scrollWidth; // total width of all items
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
  }

  animate();

  const container = slider.parentElement; // the overflow-hidden div

  container.addEventListener("mouseenter", () => {
    currentSpeed = 0; // pause smoothly
  });

  container.addEventListener("mouseleave", () => {
    currentSpeed = baseSpeed; // resume from same spot
  });
});
