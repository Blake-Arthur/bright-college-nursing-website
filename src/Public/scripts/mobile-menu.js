document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("menu-overlay");
  const openButtons = document.querySelectorAll("[data-menu-open]");
  const closeBtn = document.querySelector("[data-menu-close]");

  if (!overlay || !openButtons.length || !closeBtn) return;

  let lastTrigger = null;

  function openMenu(trigger) {
    lastTrigger = trigger;
    overlay.classList.add("is-active");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
  }

  function closeMenu() {
    overlay.classList.remove("is-active");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
    lastTrigger?.focus();
  }

  openButtons.forEach((btn) => {
    btn.addEventListener("click", () => openMenu(btn));
  });

  closeBtn.addEventListener("click", closeMenu);

  // ESC closes Menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-active")) {
      closeMenu();
    }
  });
});
