document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider-wrapper");

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(".slide");
    const nextBtn = slider.querySelector(".nextSlide");
    const prevBtn = slider.querySelector(".prevSlide");

    let currentSlide = 0;

    if (slides.length === 0) return;

    // Hide arrows if only 1 slide
    if (slides.length <= 1) {
      if (nextBtn) nextBtn.style.display = "none";
      if (prevBtn) prevBtn.style.display = "none";
    }

    function showSlide(index) {
      slides.forEach((slide) => slide.classList.remove("active"));
      slides[index].classList.add("active");
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length; // loop forward
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length; // loop backward
      showSlide(currentSlide);
    }

    // Button events
    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    // Auto loop
    let interval = setInterval(nextSlide, 8000);

    slider.addEventListener("mouseenter", () => clearInterval(interval));
    slider.addEventListener("mouseleave", () => {
      interval = setInterval(nextSlide, 8000);
    });
  });
});
