function setupOverlay(overlayId, openAttr, closeAttr) {
  const overlay = document.getElementById(overlayId);
  const openButtons = document.querySelectorAll(`[${openAttr}]`);
  const closeBtn = overlay?.querySelector(`[${closeAttr}]`);

  if (!overlay || !openButtons.length || !closeBtn) return;

  let lastTrigger = null;

  function open(trigger) {
    lastTrigger = trigger;
    overlay.classList.add("is-active");
    document.body.classList.add("overlay-open");
  }

  function close() {
    overlay.classList.remove("is-active");
    document.body.classList.remove("overlay-open");
    lastTrigger?.focus();
  }

  openButtons.forEach((btn) => {
    btn.addEventListener("click", () => open(btn));
  });

  closeBtn.addEventListener("click", close);
}

setupOverlay("search-overlay", "data-search-open", "data-search-close");
setupOverlay("enquiry-overlay", "data-enquiry-open", "data-enquiry-close");
setupOverlay("chat-bot", "data-chatbot-open", "data-chatbot-close");
