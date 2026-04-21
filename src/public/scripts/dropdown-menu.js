document.addEventListener("click", (e) => {
  const button = e.target.closest("[data-dropdown-btn]");
  const dropdown = e.target.closest("[data-dropdown]");

  //If clicking a dropdown button
  if (button) {
    const current = button.closest("[data-dropdown]");

    // Close all others first
    document.querySelectorAll("[data-dropdown].active").forEach((d) => {
      if (d !== current) {
        d.classList.remove("active");
      }
    });

    // Toggle current
    current.classList.toggle("active");
    return;
  }

  //If clicking a link inside dropdown → close all
  if (e.target.closest(".dropdown-menu a")) {
    document.querySelectorAll("[data-dropdown].active").forEach((d) => {
      d.classList.remove("active");
    });
    return;
  }

  //If clicking outside any dropdown → close all
  if (!dropdown) {
    document.querySelectorAll("[data-dropdown].active").forEach((d) => {
      d.classList.remove("active");
    });
  }
});
