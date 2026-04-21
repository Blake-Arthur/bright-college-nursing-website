document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("menu-overlay");
  const openButtons = document.querySelectorAll("[data-menu-open]");
  const closeButtons = document.querySelectorAll("[data-menu-close]");

  if (!overlay || !openButtons.length || !closeButtons.length) return;

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

    document.getElementById("search-menu__none").checked = true;

    window.scrollTo(0, 0);

    lastTrigger?.focus();
  }

  openButtons.forEach((btn) => {
    btn.addEventListener("click", () => openMenu(btn));
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-active")) {
      closeMenu();
    }
  });
});
