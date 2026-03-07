(() => {
  try {
    const track = document.querySelector(".testimonial-card-list");
    const slides = Array.from(track.children);
    const prevBtn = document.querySelector(".icon-btn--left");
    const nextBtn = document.querySelector(".icon-btn--right");
    const dots = document.querySelectorAll(".slider-dot");

    if (!track || slides.length < 2) return;

    // Get real slide width + gap
    const slide = slides[0];
    const slideWidth = slide.getBoundingClientRect().width;

    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || 0);

    const step = slideWidth + gap;

    // Clone first & last
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    firstClone.dataset.clone = "first";
    lastClone.dataset.clone = "last";

    track.appendChild(firstClone);
    track.insertBefore(lastClone, slides[0]);

    const allSlides = Array.from(track.children);
    let index = 1;
    let locked = false;

    // Initial position
    track.style.transform = `translateX(-${step * index}px)`;

    function updateDots(i) {
      const realIndex = (i - 1 + slides.length) % slides.length;
      dots.forEach((dot, d) => {
        dot.classList.toggle("dot-active", d === realIndex);
        dot.setAttribute("aria-selected", d === realIndex);
      });
    }

    function moveTo(i, animate = true) {
      if (locked) return;
      locked = true;

      track.style.transition = animate ? "transform 0.6s ease" : "none";
      track.style.transform = `translateX(-${step * i}px)`;
      index = i;
      updateDots(i);
    }

    nextBtn?.addEventListener("click", () => moveTo(index + 1));
    prevBtn?.addEventListener("click", () => moveTo(index - 1));

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => moveTo(i + 1));
    });

    track.addEventListener("transitionend", () => {
      const current = allSlides[index];

      if (current?.dataset.clone === "first") {
        index = 1;
        moveTo(index, false);
      }

      if (current?.dataset.clone === "last") {
        index = slides.length;
        moveTo(index, false);
      }

      locked = false;
    });

    // Keyboard support
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") moveTo(index + 1);
      if (e.key === "ArrowLeft") moveTo(index - 1);
    });
  } catch (err) {
    console.error("[Testimonials Infinite Slider]", err);
  }
})();
